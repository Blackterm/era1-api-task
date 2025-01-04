'use strict';

const constants = require('./constants');

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
module.exports = (() => {

    const environment = {
        databases: {
            mysql: {
                dialect: constants.SUPPORTED_DATABASE.MYSQL,
                url: process.env.MYSQL_URI || '',
            },
            mongo: {
                dialect: constants.SUPPORTED_DATABASE.MONGO,
                url: process.env.MONGO_URI || '',
            },
        },
    };

    return environment;
})();
