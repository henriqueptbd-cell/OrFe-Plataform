const { db } = require('../config/firebase');

/**
 * Middleware de isolamento multi-tenant
 * Garante que o usuário só acesse dados da igreja que ele pertence
 * 
 * Suporta:
 * - Header: x-tenant-id
 * - Parâmetro de rota: :igrejaId
 * - Corpo: igreja_id
 */
async function tenantMiddleware(req, res, next) {
    try {
        const usuarioId = req.user.uid;

        // Busca dados do usuário
        const userDoc = await db.collection('usuarios').doc(usuarioId).get();
        const userData = userDoc.data();

        // Super admin tem acesso a tudo
        if (userData.tipo_global === 'super_admin') {
            return next();
        }

        // Determina o ID da igreja (header, param, body)
        const igrejaId = req.headers['x-tenant-id'] ||
            req.params.igrejaId ||
            req.body.igreja_id;

        // Se não veio, erro
        if (!igrejaId) {
            return res.status(400).json({
                erro: 'ID da igreja não fornecido. Envie via header x-tenant-id, parâmetro :igrejaId ou campo igreja_id'
            });
        }

        // Verifica se o usuário é membro aprovado da igreja
        const membroRef = await db
            .collection('membros_igreja')
            .where('usuario_id', '==', usuarioId)
            .where('igreja_id', '==', igrejaId)
            .where('status', '==', 'aprovado')
            .get();

        if (membroRef.empty) {
            return res.status(403).json({
                erro: 'Você não pertence a esta igreja ou seu acesso não foi aprovado'
            });
        }

        // Adiciona o ID da igreja no contexto da requisição
        req.igrejaId = igrejaId;
        next();

    } catch (error) {
        console.error('Erro no tenant middleware:', error);
        return res.status(500).json({ erro: 'Erro interno ao validar permissões' });
    }
}

module.exports = { tenantMiddleware };