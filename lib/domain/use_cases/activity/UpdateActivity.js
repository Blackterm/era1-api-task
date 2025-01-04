'use strict';

module.exports = (id, ad, tarih, aciklama, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.updateActivity(id, ad, tarih, aciklama);
};