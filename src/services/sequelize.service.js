const { Sequelize } = require("sequelize");

const _Host = process.env.DB_HOST;
const _Port = process.env.DB_PORT;
const _User = process.env.DB_USER;
const _Pass = process.env.DB_PASS;
const _DataBase = process.env.DB_DATABASE;

const DBInstance = new Sequelize({
    host: _Host,
    port: _Port,
    username: _User,
    password: _Pass,
    database: _DataBase,
    dialect: 'mysql',
    timezone: '+00:00',
    define: { schema: _DataBase },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = DBInstance;