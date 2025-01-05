'use strict';
const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController'); // Controller dosyanıza göre düzenleyin


router.get('/activities', ActivityController.getActivities);
router.get('/activity-detail', ActivityController.getActivityDetail);
router.post('/add-activity', ActivityController.postAddActivity);
router.put('/activity', ActivityController.updateActivity);
router.delete('/activity', ActivityController.deleteActivity);
router.get('/comments', ActivityController.getComments);
router.post('/add-comment', ActivityController.postAddComment);
router.post('/join-activity', ActivityController.postJoinActivity);


module.exports = router;