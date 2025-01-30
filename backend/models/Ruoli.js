module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ruoli', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
      tableName: 'ruoli',
      timestamps: false,
    });
  };
  