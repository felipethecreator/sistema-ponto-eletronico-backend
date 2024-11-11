const database = require('../config/db.js');
import { DataTypes } from "sequelize";

const Usuario = database.define('usuario', {
    id_usuario: {
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

module.exports = Usuario;