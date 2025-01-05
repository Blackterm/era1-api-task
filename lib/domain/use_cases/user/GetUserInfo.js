'use strict';

module.exports = (userId, { userRepository }) => {

    return userRepository.getUserInfo(userId);
};