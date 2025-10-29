const express = require('express');
const router = express.Router();
const readerController = require('../controllers/readerController');

router.post('/register', readerController.register);
router.post('/login', readerController.login);

module.exports = router;
