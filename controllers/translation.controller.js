const translationCreate = require('../validators/translationCreate')
const translationUpdate = require('../validators/translationUpdate')
const translationService = require('../services/translation.service')
 
module.exports = {
 
    /* get All translations */
    async getTranslations(req, res) {
        try {
            let translations = await translationService.getTranslations()
            res.send(translations)
        } catch (e) {
            console.error(e);
            // console.log(req);
            // console.log(res);
            res.send(`Internal server error!!!! ${req} ${res}`)
        }
    },
 
    /* add translation */
    async addTranslation(req, res) {
        try {
            const { body } = req
 
            /* validate input */
            let inputIsValid = await translationCreate.validate(body)
 
            if(inputIsValid.error){
                res.send(inputIsValid.error.details[0].message)
            } else {
                let createdTranslation = await translationService.createTranslation(body)
                res.send(createdTranslation)
            }
        } catch (e) {
            res.send(`Internal server error!!! ${req} ${res}`)
        }
    },
 
    async updateTranslationById(req, res) {
        try {
            const { body } = req
            const { id } = req.params
 
            /* validate input */
            let inputIsValid = await translationUpdate.validate(body)
 
            if(inputIsValid.error){
                res.send(inputIsValid.error.message[0].details)
            } else {
                let updatedTranslation = await translationService.updateTranslation(id, body)
                res.send(updatedTranslation)
            }
        } catch (e) {
            res.send('Internal server error!!')
        }
    },
 
    async deleteTranslationById(req, res) {
        try {
            const { id } = req.params
            let deletedTranslation = await translationService.deleteTranslation(id)
            res.send(deletedTranslation)
        } catch (e) {
            res.send('Internal server error!')
        }
    },
}