const admin = require('firebase-admin');

function initFirebase() {
  if (admin.apps && admin.apps.length) return admin.app();

  // Prefer GOOGLE_APPLICATION_CREDENTIALS env var (path) or full key via env vars
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    const serviceAccount = {
      project_id: projectId,
      client_email: clientEmail,
      // Private key may contain literal \n sequences
      private_key: privateKey.replace(/\\n/g, '\n')
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    admin.initializeApp();
  } else {
    // No credentials found; initialize without credentials for local dev warnings
    console.warn('Firebase credentials not found. Set GOOGLE_APPLICATION_CREDENTIALS or FIREBASE_* env vars.');
    admin.initializeApp();
  }

  return admin.app();
}

// REMOVIDO: initFirebase() automático aqui.
// Agora a inicialização só acontece quando initFirebase() for chamado
// explicitamente (no server.js, depois do dotenv.config()).


// Exporta TUDO que vamos precisar
module.exports = {
  initFirebase,  // mantido para caso queira chamar manualmente em algum lugar específico
  admin,         // mantido para casos avançados
  get db() {     // <-- agora só executa admin.firestore() quando alguém usar '.db'
    return admin.firestore();
  },
  get auth() {   // <-- mesma ideia para auth
    return admin.auth();
  }
};