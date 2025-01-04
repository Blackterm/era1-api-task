'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
    };

    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
        const AuthorizationRepository = require('../repositories/AuthorizationRepositoryMySql');
        beans.authorizationRepository = new AuthorizationRepository();
    }

    return beans;
}

module.exports = buildBeans();
