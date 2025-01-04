'use strict';
const GetActivities = require('../../domain/use_cases/activity/GetActivities');
const PostAddActivity = require('../../domain/use_cases/activity/PostAddActivity');
const UpdateActivity = require('../../domain/use_cases/activity/UpdateActivity');
const DeleteActivity = require('../../domain/use_cases/activity/DeleteActivity');
const GetComments = require('../../domain/use_cases/activity/GetComments');
const PostAddComment = require('../../domain/use_cases/activity/PostAddComment');

const getActivities = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};

const postAddActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};

const updateActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};

const deleteActivity = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};

const getComments = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};

const postAddComment = async (req, res) => {
    // Context
    const serviceLocator = req.app.locals.serviceLocator;
};





module.exports = {
    getActivities,
    postAddActivity,
    updateActivity,
    deleteActivity,
    getComments,
    postAddComment
};
