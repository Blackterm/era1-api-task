'use strict';
const GetUserInfo = require('../../domain/use_cases/user/GetUserInfo');


const getUserInfo = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    const userId = req.query['userId'];


    // Treatment
    try {
        // Output
        const response = await GetUserInfo(userId, serviceLocator);
        res.status(200).json(response);

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};





module.exports = {
    getUserInfo,
};
