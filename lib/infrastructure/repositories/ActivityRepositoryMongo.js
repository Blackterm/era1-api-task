'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ActivityRepository = require('../../domain/repository/ActivityRepository');
const UID = require('../../application/uid/Uid');
const dateNow = require('../../application/enums/DateEnum');

module.exports = class extends ActivityRepository {

    async getActivities() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };
    async postAddActivity(ad, tarih, aciklama) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };
    async updateActivity(id, ad, tarih, aciklama) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };
    async deleteActivity(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };

    async getComments() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };
    async postAddComment(id, yazar, mesaj) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    };

};

