module.exports = (sequelize, DataTypes) => {
    return sequelize.define('RichiesteFerie', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_utente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM('ferie', 'permesso'),
        allowNull: false,
      },
      data_inizio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      data_fine: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      stato: {
        type: DataTypes.ENUM('in attesa', 'approvato', 'rifiutato'),
        allowNull: true,
        defaultValue: 'in attesa',
      },
      motivo: {
        type: DataTypes.TEXT,
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
      tableName: 'richieste_ferie',
      timestamps: false,
    });
  };
  