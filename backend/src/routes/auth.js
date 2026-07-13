const express = require('express');
const router = express.Router();
const { admin, initFirebase } = require('../config/firebase');
const { authMiddleware } = require('../middleware/auth');

initFirebase();
const db = admin.firestore();
const auth = admin.auth();

/**
 * POST /api/auth/login
 * Recebe o token do Firebase Auth (Google) e cria/retorna o usuário
 */
router.post('/login', async (req, res) => {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({ erro: 'Token não fornecido' });
        }

        // Verificar token do Firebase
        const decodedToken = await auth.verifyIdToken(idToken);
        const { uid, email, name, picture } = decodedToken;

        // Buscar usuário no Firestore
        const userRef = db.collection('usuarios').doc(uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            // Primeiro acesso: criar usuário
            const newUser = {
                nome: name || 'Sem nome',
                email: email,
                google_id: uid,
                foto_perfil: picture || null,
                capa_perfil: null,
                sobre: '',
                igrejas: [],
                igreja_ativa: null,
                tipo_global: 'usuario',
                ativo: true,
                criado_em: admin.firestore.FieldValue.serverTimestamp()
            };

            await userRef.set(newUser);

            // Retornar usuário recém-criado
            return res.status(201).json({
                usuario: {
                    id: uid,
                    ...newUser,
                    criado_em: new Date()
                },
                novo: true
            });
        }

        // Usuário já existe: retornar dados
        const userData = userDoc.data();

        return res.json({
            usuario: {
                id: uid,
                ...userData,
                criado_em: userData.criado_em ? userData.criado_em.toDate() : null
            },
            novo: false
        });

    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(401).json({ erro: 'Token inválido ou expirado' });
    }
});

/**
 * GET /api/auth/me
 * Retorna os dados do usuário logado
 */
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const userDoc = await db.collection('usuarios').doc(req.user.uid).get();

        if (!userDoc.exists) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        const userData = userDoc.data();

        return res.json({
            usuario: {
                id: req.user.uid,
                ...userData,
                criado_em: userData.criado_em ? userData.criado_em.toDate() : null
            }
        });
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return res.status(500).json({ erro: 'Erro interno' });
    }
});

module.exports = router;