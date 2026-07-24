const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { initFirebase } = require('./config/firebase');

dotenv.config();
initFirebase();

const app = express();

app.use(cors());
app.use(express.json());

// Serve TODA a pasta public (html, css, js, imagens) automaticamente
app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../frontend/public/pages/login.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`🚀 OrFe rodando em http://localhost:${PORT}`);
});