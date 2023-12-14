const { Module, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');
const Tag = require('./Tag');

class ProductTag extends Model{}

ProductTag.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {   
        type: DataTypes.INTEGER,
        refrences: {
            model: "product",
            key: "id",
        },

    },

    tag_id:{
        type: DataTypes.INTEGER,
        refrences: {
            model: "tag",
            key: "id"
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "product_tag"

});

module.exports = ProductTag;