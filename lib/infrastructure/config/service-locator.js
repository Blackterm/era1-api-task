'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
    };

    if (environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MYSQL || environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MYSQL2) {
        const AuthorizationRepository = require('../repositories/AuthorizationRepositoryMySql');
        const ActivityRepositoryMongo = require('../repositories/ActivityRepositoryMongo');
        beans.authorizationRepository = new AuthorizationRepository();
        beans.activityRepositoryMongo = new ActivityRepositoryMongo();
    }

    return beans;
}

module.exports = buildBeans();
