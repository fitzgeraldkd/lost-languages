//index router
const express = require('express');
const translationController = require('../controllers/translation.controller');
const router = express.Router();
 
/* get translations */
router.get('/', translationController.getTranslations)
 
/* post new translation */
router.post('/', translationController.addTranslation)
 
/* update translation by id */
router.put('/:id', translationController.updateTranslationById)
 
/* delete translation by id */
router.delete('/:id', translationController.deleteTranslationById)
 
module.exports = router