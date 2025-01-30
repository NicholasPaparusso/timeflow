const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test connessione DB
db.sequelize.authenticate()
  .then(() => console.log('Connessione al database riuscita'))
  .catch(err => console.error('Errore di connessione:', err));

// Sincronizzazione dei modelli
db.sequelize.sync({ alter: true })
  .then(() => console.log('Modelli sincronizzati'))
  .catch(err => console.error('Errore nella sincronizzazione:', err));

// Avvia il server
app.listen(PORT, () => console.log(`Server avviato su http://localhost:${PORT}`));
