import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
})

async function dbConnect() {
    try {
        await sequelize.authenticate();
        console.log('conectado ao banco de dados!')
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar', error)
    }
}
export default dbConnect;