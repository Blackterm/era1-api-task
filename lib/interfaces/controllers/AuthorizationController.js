'use strict';
const PostSingIn = require('../../domain/use_cases/authorization/PostSingIn');
const PostLogin = require('../../domain/use_cases/authorization/PostLogin');
const VerifyAccessToken = require('../../domain/use_cases/VerifyAccessToken');

const singIn = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const email = req.body['email'];
    const password = req.body['password'];
    const birthDate = req.body['birthDate'];
    const gender = req.body['gender'];
    const name = req.body['name'];
    const lastName = req.body['lastName'];
    const phone = req.body['phone'];

    // Treatment
    try {
        // Output
        const response = await PostSingIn(email, password, birthDate, gender, name, lastName, phone, serviceLocator);
        if (response) {
            res.status(200).json({
                status: 'success',
                message: 'Success to crate'
            });
        } else {
            res.status(401).json({
                status: 'fail',
                message: 'Failed to create an account'
            });
        }

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};


const login = async (req, res) => {

    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const grantType = req.body['grant_type'];
    const email = req.body['email'];
    const password = req.body['password'];



    if (!grantType || grantType !== 'bearer') {
        return res.status(401).json({
            status: 'fail',
            message: 'Invalid grant type'
        });

    }

    // Treatment
    try {
        const accessToken = await PostLogin(email, password, serviceLocator);
        res.status(200).json({
            status: 'success',
            bearer: accessToken
        });

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};


const verifyAccessToken = async (req, res) => {

    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            status: 'fail',
            message: 'Missing or wrong Authorization request header'
        });
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    try {
        // Output
        var response = await VerifyAccessToken(accessToken, serviceLocator);

        if (response) {
            return true;
        }
        else {
            return false;
        }
    } catch (err) {
        return false;
    }
};



module.exports = {
    singIn,
    login,
    verifyAccessToken,
};
