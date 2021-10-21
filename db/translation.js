'use strict';
const {  Model, DataTypes } = require('sequelize');
 
module.exports = (sequelize) => {  
  class Translations extends Model {}
 
  Translations.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    first_language: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    first_sentence: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    target_language: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    target_sentence: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'translations',
    // schema: 'data',
    sequelize,
    modelName: 'Translations',
    // createdAt: 'created_at',
    // updatedAt: 'updated_at'
  });
 
  return Translations
};