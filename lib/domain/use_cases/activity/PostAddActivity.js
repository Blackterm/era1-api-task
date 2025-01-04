'use strict';

module.exports = (ad, tarih, aciklama, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.postAddActivity(ad, tarih, aciklama);
};