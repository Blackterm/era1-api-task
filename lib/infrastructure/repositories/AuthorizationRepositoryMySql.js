'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const AuthorizationRepository = require('../../domain/repository/AuthorizationRepository');
const UID = require('../../application/uid/Uid');
const query = require('../../application/enums/DatabaseEnum');
const dateNow = require('../../application/enums/DateEnum');

module.exports = class extends AuthorizationRepository {

    async singIn(email, password, birthDate, gender, name, lastName, phone,) {
        // TODO: check email and number
        return connection.query(`INSERT INTO users (userId, email,password, birthDate, gender, name ,lastName, phone, creationDate, lastLogin) VALUES ( '${UID.uid()}'  ,'${email}'  ,'${password}', '${birthDate}','${gender}' ,'${name}' ,'${lastName}','${phone}','${dateNow.dateNow()}','${dateNow.dateNow()}' )`)
            .then(([rows, fields]) => {

                return true;
            })
            .catch(error => {
                throw new Error('Error executing query:', error);
            });
    };

    async login(email, password) {

        return connection.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`)
            .then(([rows, fields]) => {
                return rows;
            })
            .catch(error => {
                throw new Error('Error executing query:', error);
            });
    };


};

