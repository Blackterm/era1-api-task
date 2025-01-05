'use strict';
const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/UserController'); // Controller dosyanıza göre düzenleyin


router.get('/user-info', ActivityController.getUserInfo);



module.exports = router;