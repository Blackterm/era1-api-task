'use strict';

module.exports = async (accessToken, { accessTokenManager }) => {
    const decoded = await accessTokenManager.decode(accessToken);

    if (!decoded) {
        return false;
    }
    return accessTokenManager.decode(accessToken);
};
