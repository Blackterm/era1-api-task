'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
    };

    if (environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MYSQL || environment.databases.mysql.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        const AuthorizationRepository = require('../repositories/AuthorizationRepositoryMySql');
        const ActivityRepositoryMongo = require('../repositories/ActivityRepositoryMongo');
        const UserRepositoryMySql = require('../repositories/UserRepositoryMySql');
        beans.authorizationRepository = new AuthorizationRepository();
        beans.activityRepositoryMongo = new ActivityRepositoryMongo();
        beans.userRepository = new UserRepositoryMySql();
    }

    return beans;
}

module.exports = buildBeans();
