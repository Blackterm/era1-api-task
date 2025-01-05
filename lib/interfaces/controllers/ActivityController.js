'use strict';
const GetActivities = require('../../domain/use_cases/activity/GetActivities');
const PostAddActivity = require('../../domain/use_cases/activity/PostAddActivity');
const UpdateActivity = require('../../domain/use_cases/activity/UpdateActivity');
const DeleteActivity = require('../../domain/use_cases/activity/DeleteActivity');
const GetComments = require('../../domain/use_cases/activity/GetComments');
const PostAddComment = require('../../domain/use_cases/activity/PostAddComment');
const PostJoinActivity = require('../../domain/use_cases/activity/PostJoinActivity');

const getActivities = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Treatment
    try {
        // Output
        const response = await GetActivities(serviceLocator);
        res.status(200).json(response);

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const postAddActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const ad = req.body['ad'];
    const tarih = req.body['tarih'];
    const aciklama = req.body['aciklama'];

    // Treatment
    try {
        await PostAddActivity(ad, tarih, aciklama, serviceLocator);

        res.status(200).json({
            status: 'success',
            message: 'Success to create'
        });


    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const updateActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const id = req.body['id'];
    const ad = req.body['ad'];
    const tarih = req.body['tarih'];
    const aciklama = req.body['aciklama'];


    // Treatment
    try {
        const response = await UpdateActivity(id, ad, tarih, aciklama, serviceLocator);

        res.status(200).json(response);


    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const deleteActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const etkinlikId = req.query['etkinlikId'];



    // Treatment
    try {
        await DeleteActivity(etkinlikId, serviceLocator);

        res.status(200).json({
            status: 'success',
            message: 'Success to delete'
        });


    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const getComments = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    const etkinlikId = req.query['etkinlikId'];

    // Treatment
    try {
        // Output
        const response = await GetComments(etkinlikId, serviceLocator);
        res.status(200).json(response);

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const postAddComment = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const id = req.body['id'];
    const yazar = req.body['yazar'];
    const mesaj = req.body['mesaj'];


    // Treatment
    try {
        await PostAddComment(id, yazar, mesaj, serviceLocator);

        res.status(200).json({
            status: 'success',
            message: 'Success to update'
        });


    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};

const postJoinActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;

    // Input
    const etkinlikId = req.body['etkinlikId'];
    const ad = req.body['ad'];
    const soyad = req.body['soyad'];
    const email = req.body['email'];

    console.log(etkinlikId, ad, soyad, email);
    // Treatment
    try {
        await PostJoinActivity(etkinlikId, ad, soyad, email, serviceLocator);

        res.status(200).json({
            status: 'success',
            message: 'Success to update'
        });


    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err
        });
    }
};





module.exports = {
    getActivities,
    postAddActivity,
    updateActivity,
    deleteActivity,
    getComments,
    postAddComment,
    postJoinActivity
};
