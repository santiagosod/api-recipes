const db = require("../tools/database")
const { DataTypes } = require("sequelize")
const Recipes = require("./recipes.models")

const Instructions = db.define("instructions", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "recipe_id",
        references: {
            key: "id",
            model: Recipes
        }
    },
    step: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},)

module.exports = Instructions