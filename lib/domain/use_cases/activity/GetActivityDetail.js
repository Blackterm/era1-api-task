'use strict';

module.exports = (id, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.getActivityDetail(id);
};