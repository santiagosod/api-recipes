const db = require("../tools/database")
const { DataTypes } = require("sequelize")
const Recipes = require("./recipes.models")
const Ingredients = require("./ingredients.models")

const IngredientsRecipes = db.define("ingredients_recipes", {
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

module.exports = IngredientsRecipes