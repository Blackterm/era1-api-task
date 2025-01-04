'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
    };

    if (environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
        const AuthorizationRepository = require('../repositories/AuthorizationRepositoryMySql');
        beans.authorizationRepository = new AuthorizationRepository();
    } else if (environment.databases.mongo.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        const ActivityRepositoryMongo = require('../repositories/ActivityRepositoryMongo');
        beans.activityRepositoryMongo = new ActivityRepositoryMongo();
    }

    return beans;
}

module.exports = buildBeans();
