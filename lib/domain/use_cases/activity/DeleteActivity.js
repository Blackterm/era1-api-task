'use strict';

module.exports = (id, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.deleteActivity(id);
};