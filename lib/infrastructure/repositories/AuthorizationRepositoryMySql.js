'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const AuthorizationRepository = require('../../domain/repository/AuthorizationRepository');
const UID = require('../../application/uid/Uid');
const query = require('../../application/enums/DatabaseEnum');
const dateNow = require('../../application/enums/DateEnum');
const bcrypt = require('bcrypt');

module.exports = class extends AuthorizationRepository {

    async singIn(email, password, birthDate, gender, name, lastName, phone,) {
        const hashedPassword = await bcrypt.hash(password, 10);
        // TODO: check email and number
        return connection.query(`INSERT INTO users (userId, email,password, birthDate, gender, name ,lastName, phone, creationDate, lastLogin) VALUES ( '${UID.uid()}'  ,'${email}'  ,'${hashedPassword}', '${birthDate}','${gender}' ,'${name}' ,'${lastName}','${phone}','${dateNow.dateNow()}','${dateNow.dateNow()}' )`)
            .then(([rows, fields]) => {

                return rows;
            })
            .catch(error => {
                throw new Error('Error executing query:', error);
            });
    };

    async login(email, password) {
        try {
            const [rows] = await connection.query(`SELECT * FROM users WHERE email = ?`, [email]);
            if (rows.length === 0) {
                throw new Error('Kullanıcı bulunamadı veya hatalı giriş bilgileri.');
            }
            const user = rows[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                throw new Error('Şifre hatalı.');
            }
            return user;
        } catch (error) {
            throw new Error(`Login hatası: ${error.message}`);
        }
    }
};

