const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa i modelli
db.Impostazioni = require('./Impostazioni')(sequelize, Sequelize);
db.Presenze = require('./Presenze')(sequelize, Sequelize);
db.RichiesteFerie = require('./RichiesteFerie')(sequelize, Sequelize);
db.Ruoli = require('./Ruoli')(sequelize, Sequelize);
db.Utenti = require('./Utenti')(sequelize, Sequelize);

db.Utenti.belongsTo(db.Ruoli, { foreignKey: 'id_ruolo' });
db.Presenze.belongsTo(db.Utenti, { foreignKey: 'id_utente' });
db.RichiesteFerie.belongsTo(db.Utenti, { foreignKey: 'id_utente' });


module.exports = db;
