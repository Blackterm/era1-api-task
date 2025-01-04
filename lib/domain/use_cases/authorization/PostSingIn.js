'use strict';

module.exports = (email, password, birthDate, gender, name, lastName, phone, { authorizationRepository }) => {

    return authorizationRepository.singIn(email, password, birthDate, gender, name, lastName, phone);
};