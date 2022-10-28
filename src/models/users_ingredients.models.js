const db = require("../tools/database")
const { DataTypes } = require("sequelize")
const Users = require("./users.models")
const Ingredients = require("./ingredients.models")

const UsersIngredients = db.define("users_ingredients", {
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
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "ingredient_id",
        references: {
            key: "id",
            model: Ingredients
        }
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = UsersIngredients