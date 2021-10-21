//index router
const express = require('express');
const router = express.Router();
const translationsRouter = require('./translation.router')
 
router.use('/translations', translationsRouter)
 
module.exports = router