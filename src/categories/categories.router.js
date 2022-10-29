//! Dependencies
const router = require("express").Router()
const categoriesServices = require("./categories.services")

//? Routes
router.route("/")
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.createCategory) //TODO Protegida por admin

router.route(":id")
    .get(categoriesServices.getCategoryById)
    .delete(categoriesServices.deleteCategory) //TODO Protegida por admin

module.exports = router