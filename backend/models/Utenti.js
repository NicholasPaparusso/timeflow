module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Utenti', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      saldo_ferie: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      data_creazione: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      ultima_modifica: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      id_ruolo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    }, {
      tableName: 'utenti',
      timestamps: false,
    });
  };
  