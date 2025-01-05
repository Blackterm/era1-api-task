'use strict';

module.exports = (id, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.getComments(id);
};