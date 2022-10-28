const Categories = require("./categories.models")
const Ingredients = require("./ingredients.models")
const Instructions = require("./instructions.models")
const Recipes = require("./recipes.models")
const IngredientsRecipes = require("./recipes_ingredients.models")
const Types = require("./types.models")
const Users = require("./users.models")
const UsersIngredients = require("./users_ingredients.models")
const UsersRecipes = require("./users_recipes.models")

const initModels = () => {
    //* Users 1:M Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //* Categories 1:M Recipes
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //* Users 1:M UserRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //* Recipes 1:M UserRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //* Users 1:M UserIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //* Ingredient 1:M UserIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    //* Types 1:M Ingredients
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1:M Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

    //* Recipe 1:M Recipe Ingredients
    Recipes.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Recipes)

    //* Ingredient 1:M Recipe Ingredients
    Ingredients.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Ingredients)
}

module.exports = initModels