module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Presenze', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_utente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      orario_entrata: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      orario_uscita: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      posizione: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      data_creazione: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      ultima_modifica: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'presenze',
      timestamps: false,
    });
  };
  