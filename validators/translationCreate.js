const Joi = require('joi')

const TranslationCreateValidator = Joi.object({
    image_id: Joi.string(),
    first_language: Joi.string(),
    first_sentence: Joi.string(),
    target_language: Joi.string(),
    target_sentence: Joi.string(),
});
 
module.exports = TranslationCreateValidator;