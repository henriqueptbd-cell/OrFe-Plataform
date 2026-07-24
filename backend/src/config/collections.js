require("dotenv").config();

const { initFirebase, admin } = require('./firebase');

initFirebase();
const db = admin.firestore();

/**
 * Cria as coleções iniciais no Firestore
 * O Firestore cria coleções automaticamente ao inserir documentos,
 * então vamos criar documentos iniciais de configuração
 */
async function setupCollections() {
    console.log('📦 Configurando coleções no Firestore...\n');

    // Coleção: igrejas
    await db.collection('igrejas').doc('_config').set({
        descricao: 'Coleção de igrejas cadastradas na plataforma',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: usuarios
    await db.collection('usuarios').doc('_config').set({
        descricao: 'Perfil global dos usuários',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: membros_igreja
    await db.collection('membros_igreja').doc('_config').set({
        descricao: 'Vínculo entre usuário e igreja com papel e status',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: posts
    await db.collection('posts').doc('_config').set({
        descricao: 'Posts e notícias das igrejas',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: comentarios
    await db.collection('comentarios').doc('_config').set({
        descricao: 'Comentários em posts',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: eventos
    await db.collection('eventos').doc('_config').set({
        descricao: 'Eventos das igrejas',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: campos_evento
    await db.collection('campos_evento').doc('_config').set({
        descricao: 'Campos dinâmicos dos formulários de evento',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: inscricoes
    await db.collection('inscricoes').doc('_config').set({
        descricao: 'Inscrições em eventos',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: curtidas
    await db.collection('curtidas').doc('_config').set({
        descricao: 'Curtidas em posts, eventos e comentários',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    // Coleção: atividades
    await db.collection('atividades').doc('_config').set({
        descricao: 'Feed de atividades dos usuários e igrejas',
        criado_em: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log('✅ Todas as coleções configuradas!\n');
    console.log('📋 Coleções criadas:');
    console.log('  1. igrejas');
    console.log('  2. usuarios');
    console.log('  3. membros_igreja');
    console.log('  4. posts');
    console.log('  5. comentarios');
    console.log('  6. eventos');
    console.log('  7. campos_evento');
    console.log('  8. inscricoes');
    console.log('  9. curtidas');
    console.log('  10. atividades');
}

// Executar
setupCollections()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('❌ Erro:', err);
        process.exit(1);
    });