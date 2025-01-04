
require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {

    async init() {
        if (environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
            require('../orm/mysql/mysql');
        } else if (environment.databases.mongo.dialect === constants.SUPPORTED_DATABASE.MONGO) {
            require('../orm/mongoose/mongoose');
        }
    }
};
