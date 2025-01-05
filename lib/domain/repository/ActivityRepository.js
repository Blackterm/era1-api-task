'use strict';

module.exports = class {

    getActivities() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    postAddActivity(ad, tarih, aciklama) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    updateActivity(id, ad, tarih, aciklama) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    deleteActivity(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    postAddComment(id, yazar, mesaj) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    getComments(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    postJoinActivity(etkinlikId, ad, soyad, email) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

};
