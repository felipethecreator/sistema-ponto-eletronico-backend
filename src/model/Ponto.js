const { sequelize } = require('../config/db.js');
const { DataTypes } = require("sequelize");

const Ponto = database.define('Ponto', {
    id_ponto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: DataTypes.ENUM('USER', 'ADM'),
        allowNull: false
    }
},
{
    timestamps: true
});

module.exports = Ponto;