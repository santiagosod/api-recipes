const uuid = require('uuid')
const { Op } = require("sequelize")
const Categories = require('../models/categories.models')
const Ingredients = require('../models/ingredients.models')
const Instructions = require('../models/instructions.models')
const Recipes = require('../models/recipes.models')
const IngredientsRecipes = require('../models/recipes_ingredients.models')
const Types = require('../models/types.models')
const Users = require('../models/users.models')

const getAllRecipes = async () => {
    const data = await Recipes.findAll({
        attributes: {
            exclude: ["userId", "categoryId", "createdAt", "updatedAt"]
        },
        include: [
            {
                model: Users,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Categories
            },
            {
                model: Instructions,
                attributes: ["step", "description"]
            },
            {
                model: IngredientsRecipes,
                include: {
                    model: Ingredients,
                    include: {
                        model: Types
                    }
                }
            }
        ]
    })
    return data
}

const getRecipeById = async (id) => {
    const data = await Recipes.findOne({
        where: {
            id
        }
    })
    return data
}

const createRecipe = async (data) => {
    const response = await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: data.userId,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    })
    return response
}

const updateRecipe = async (id, data) => {
    const response = await Recipes.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteRecipe = async (id) => {
    const data = await Recipes.destroy({
        where: {
            id
        }
    })
    return data
}

const getMyRecipes = async (userId) => {
    const userIngredients = await Recipes.findAll({
        attributes: ["ingredientId"],
        where: {
            userId
        }
    })
    const filterIngredients = userIngredients.map(obj => obj.ingredientId)
    const recipeIngredients = await IngredientsRecipes.findAll({
        where: {
            ingredientId: {
                [Op.in]: filterIngredients
            }
        }
    })
    const filteredRecipes = recipeIngredients.map(obj => obj.recipeId)

    const data = await Recipes.findAll({
        where: {
            id: {
                [Op.in]: filteredRecipes
            }
        }
    })

    return data
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getMyRecipes
}