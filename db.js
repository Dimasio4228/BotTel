const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'bot',
    'postgres',
    'root',
    {
        host: '127.0.0.1',
        port: '5432',
        dialect: 'postgres'
    }
)