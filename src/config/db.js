import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres', 'postgres', '682411', {
    host: 'localhost',
    port: '5432',
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