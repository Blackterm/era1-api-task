'use strict';

module.exports = (etkinlikId, ad, soyad, email, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.postJoinActivity(etkinlikId, ad, soyad, email);
};