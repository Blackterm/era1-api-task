'use strict';

module.exports = async (email, password, { authorizationRepository, accessTokenManager }) => {

    var user = await authorizationRepository.login(email, password);
    if (user !== null) {
        var res = await accessTokenManager.generate(user.userId);
        return res;
    } else {
        throw new Error('Error');
    }

};

