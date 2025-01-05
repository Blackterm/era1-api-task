'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');
const UID = require('../../application/uid/Uid');
const query = require('../../application/enums/DatabaseEnum');
const dateNow = require('../../application/enums/DateEnum');

module.exports = class extends UserRepository {

    async getUserInfo(userId) {
        return connection.query(`SELECT * FROM users WHERE userId = '${userId}'`)
            .then(([rows, fields]) => {

                return rows[0];
            })
            .catch(error => {
                throw new Error('Error executing query:', error);
            });
    };

};
