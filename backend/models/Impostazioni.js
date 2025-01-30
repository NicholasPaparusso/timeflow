module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Impostazioni', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      chiave: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      valore: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_creazione: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      ultima_modifica: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  };
  