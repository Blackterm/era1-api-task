'use strict';

const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UID = require('../../application/uid/Uid');
module.exports = class extends AccessTokenManager {

    async generate(payload) {


        const uid = UID.uid()
        var token = jwt.sign({
            data: {
                'id': payload
            }
        }, uid, { expiresIn: '12h' }, { algorithm: 'ES512' })
        var time = jwt.decode(token)
        let sqlQuery = `INSERT INTO login_token(token, expiresIn,userIp)VALUES(?,?,?)`
        var res = await connection.query(sqlQuery, [token, time.exp, '123.123.1.1']);
        if (res[0].serverStatus === 2) {
            return token;
        } else {
            throw Error('Error creating')
        }
    }

    async decode(accessToken) {
        var [rows, fields] = await connection.query(`SELECT * FROM login_token WHERE token = '${accessToken}'`);

        if (rows.length !== 0) {
            if (rows[0].token === accessToken) {
                var token = jwt.decode(accessToken)

                if (Date.now() >= token.exp * 1000) {
                    return false;
                }
                else {
                    return true;
                }

            } else {
                return false;
            }
        }
        else {
            return false;
        }

    }

};