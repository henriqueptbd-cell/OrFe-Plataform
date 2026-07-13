// Configuração do Firebase (CLIENTE - NÃO é o Admin SDK)
const firebaseConfig = {
    apiKey: 'AIzaSyCI-KafNVjv0uv3u1j9YuWVVO06naBlIBw',
    authDomain: 'orfe-platform.firebaseapp.com',
    projectId: 'orfe-platform',
    storageBucket: 'orfe-platform.firebasestorage.app',
    messagingSenderId: '936337573669',
    appId: '1:936337573669:web:1ff1c0401335b507f1bccc',
    measurementId: 'G-E9QF4F9SHS'
};

window.firebaseConfig = firebaseConfig;

const statusEl = document.getElementById('firebase-status');

if (typeof firebase === 'undefined') {
    console.error('Firebase SDK não carregou. Verifique o script do CDN.');
    if (statusEl) {
        statusEl.textContent = 'Não foi possível carregar o Firebase. Verifique sua conexão ou bloqueio do CDN.';
    }
} else {
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    window.auth = auth;
    window.googleProvider = googleProvider;

    if (statusEl) {
        statusEl.textContent = 'Firebase pronto. Você pode entrar com Google.';
    }
}