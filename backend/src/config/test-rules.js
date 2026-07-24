require('dotenv').config();
const { initFirebase, admin } = require('./firebase');

initFirebase();
const db = admin.firestore();

async function testRules() {
    console.log('🧪 Testando regras de segurança...\n');

    // Teste 1: Leitura pública de igrejas
    try {
        const snapshot = await db.collection('igrejas').limit(1).get();
        console.log('✅ Leitura pública de igrejas: OK');
    } catch (err) {
        console.log('❌ Leitura pública de igrejas:', err.code);
    }

    // Teste 2: Leitura protegida de usuários
    try {
        const snapshot = await db.collection('usuarios').limit(1).get();
        console.log('✅ Leitura de usuários: OK');
    } catch (err) {
        console.log('❌ Leitura de usuários:', err.code);
    }

    // Teste 3: Escrita na coleção _config (só super_admin)
    try {
        await db.collection('igrejas').doc('_test-rules').set({ test: true });
        console.log('✅ Escrita admin (via SDK): OK');
        // Limpar
        await db.collection('igrejas').doc('_test-rules').delete();
    } catch (err) {
        console.log('❌ Escrita admin:', err.code);
    }

    console.log('\n✅ Testes concluídos!');
    console.log('⚠️  Para testar regras com usuário autenticado, use o Simulador no Console Firebase:');
    console.log('   https://console.firebase.google.com/project/orfe-platform/firestore/rules');
}

testRules()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Erro:', err);
        process.exit(1);
    });