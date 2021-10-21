const Joi = require('joi')

const TranslationUpdateValidator = Joi.object({
    image_id: Joi.string().required(),
    first_language: Joi.string().required(),
    first_sentence: Joi.string().required(),
    target_language: Joi.string().required(),
    target_sentence: Joi.string().required(),
});
 
module.exports = TranslationUpdateValidator;