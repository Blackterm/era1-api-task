'use strict';
const express = require('express');
const router = express.Router();
const AuthorizationController = require('../controllers/AuthorizationController'); // Controller dosyanıza göre düzenleyin


router.post('/login', AuthorizationController.login);
router.post('/signin', AuthorizationController.singIn);


module.exports = router;