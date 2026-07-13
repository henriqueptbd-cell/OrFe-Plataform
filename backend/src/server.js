const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { initFirebase } = require('./config/firebase');

dotenv.config();
initFirebase();

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Servir frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// Rotas da API
app.use('/api/auth', require('./routes/auth'));

// Rota principal
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../frontend/public/pages/login.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`🚀 OrFe rodando em http://localhost:${PORT}`);
});