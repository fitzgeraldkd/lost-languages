const db = require('../db/index')
 
module.exports = {
    async getTranslations() {
        try {
            let translations = await db.Translations.findAll()
            return translations
        } catch (e) {
            throw e
        }
    },
 
    async createTranslation(translation){
        try {
            let newTranslation = await db.Translations.create(translation)
            return newTranslation
        } catch (e) {
            throw e
        }
    },
 
    async updateTranslation(id, translation){
        try {
            let updatedTranslation = await db.Translations.update(translation, {
                where: {
                    id: id
                }
            })
            return updatedTranslation
        } catch (e) {
            throw e
        }
    },
 
    async deleteTranslation(id){
        try {
            let deletedTranslation = await db.Translations.destroy({
                where: {
                    id: id
                }
            })
            if(deletedTranslation){
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}