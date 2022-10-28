const db = require("../tools/database")
const { DataTypes } = require("sequelize")
const Users = require("./users.models")
const Recipes = require("./recipes.models")

const UsersRecipes = db.define("users_recipes", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id",
        references: {
            key: "id",
            model: Users
        }
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
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = UsersRecipes