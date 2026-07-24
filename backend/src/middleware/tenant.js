const { admin } = require('../config/firebase');
const db = admin.firestore();

/**
 * Middleware de isolamento multi-tenant
 * Garante que o usuário só acesse dados da igreja que ele pertence
 */
async function tenantMiddleware(req, res, next) {
    try {
        const usuarioId = req.user.uid;

        // Super admin tem acesso a tudo
        const userDoc = await db.collection('usuarios').doc(usuarioId).get();
        const userData = userDoc.data();

        if (userData.tipo_global === 'super_admin') {
            return next();
        }

        // Se a rota tem :igrejaId, verifica se o usuário pertence a ela
        const igrejaId = req.params.igrejaId || req.body.igreja_id;

        if (igrejaId) {
            const membroRef = await db
                .collection('membros_igreja')
                .where('usuario_id', '==', usuarioId)
                .where('igreja_id', '==', igrejaId)
                .where('status', '==', 'aprovado')
                .get();

            if (membroRef.empty) {
                return res.status(403).json({
                    erro: 'Você não pertence a esta igreja'
                });
            }
        }

        // Adiciona igreja_id ao contexto da requisição
        req.igrejaId = igrejaId;
        next();

    } catch (error) {
        console.error('Erro no tenant middleware:', error);
        return res.status(500).json({ erro: 'Erro interno' });
    }
}

module.exports = { tenantMiddleware };