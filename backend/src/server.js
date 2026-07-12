const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { initFirebase } = require('./config/firebase');

dotenv.config();
initFirebase();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port ${PORT}`);
});
