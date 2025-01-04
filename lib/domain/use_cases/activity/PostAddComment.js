
module.exports = (id, yazar, mesaj, { activityRepositoryMongo }) => {

    return activityRepositoryMongo.postAddComment(id, yazar, mesaj);
};