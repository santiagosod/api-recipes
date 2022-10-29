//! Dependencies
const categoriesControllers = require("./categories.controller")

//? Peticiones
const getAllCategories = (req, res) => {
    categoriesControllers.getAllCategories()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getCategoryById = (req, res) => {
    const id = req.params.id

    categoriesControllers.getCategoryById(id)
        .then(response => {
            if (response) {
                res.status(200).json(response)
            } else {
                res.status(400).json({ message: `ID: ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const createCategory = (req, res) => {
    const { name } = req.body

    if (name) {
        categoriesControllers.createCategory(name)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({
            message: "Invalid data",
            fields: {
                name: "string"
            }
        })
    }
}

const deleteCategory = (req, res) => {
    const id = req.params.id

    categoriesControllers.deleteCategory(id)
        .then(response => {
            if (response) {
                res.status(204).json(response)
            } else {
                res.status(404).json({ message: "invalid ID" })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

//! Exports
module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}