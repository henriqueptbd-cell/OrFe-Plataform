/**
 * Login com Google
 */
async function loginComGoogle() {
    try {
        if (!window.auth || !window.googleProvider) {
            throw new Error('Firebase não inicializado. Recarregue a página.');
        }

        const result = await window.auth.signInWithPopup(window.googleProvider);
        const idToken = await result.user.getIdToken();

        // Enviar token para o backend na mesma origem
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken })
        });

        const data = await response.json();

        if (response.ok) {
            // Salvar token e dados do usuário no localStorage
            localStorage.setItem('authToken', idToken);
            localStorage.setItem('usuario', JSON.stringify(data.usuario));

            // Redirecionar para uma página existente ou fallback para a raiz
            const destino = data.novo ? '/pages/login.html' : '/';
            window.location.href = destino;
        } else {
            alert('Erro ao fazer login: ' + data.erro);
        }
    } catch (error) {
        console.error('Erro no login:', error);
        alert('Erro ao fazer login com Google');
    }
}

/**
 * Logout
 */
async function logout() {
    await auth.signOut();
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuario');
    window.location.href = '/';
}

/**
 * Verificar se usuário está logado
 */
function verificarLogin() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/login.html';
        return null;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario;
}