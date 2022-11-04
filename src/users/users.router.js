const passport = require("passport")
const userServices = require("./users.services")
const router = require("express").Router()
const adminValidate = require("../middlewares/role.middleware")
const { getUserRecipes } = require('../recipes/recipes.services')
require("../middlewares/auth.middleware")(passport)

//? Ruta raiz
router.get("/", userServices.getAllUsers)

//? Ruta de usuario logeado
router.route("/me")
    .get(
        passport.authenticate("jwt", { session: false }),
        userServices.getMyUser
    )
    .patch(
        passport.authenticate("jwt", { session: false }),
        userServices.patchMyUser
    )
    .put(
        passport.authenticate("jwt", { session: false }),
        userServices.putMyUser
    )
    .delete(
        passport.authenticate("jwt", { session: false }),
        userServices.deleteMyUser
    )

router.get('/me/my_recipes',
    passport.authenticate('jwt', { session: false }),
    getUserRecipes
)


//? Rutas dinamicas por ID 
router.route("/:id")
    .get(userServices.getUserById)
    .patch(
        passport.authenticate("jwt", { session: false }),
        adminValidate,
        userServices.patchUser
    )
    .delete(
        passport.authenticate("jwt", { session: false }),
        adminValidate,
        userServices.deleteUser
    )


module.exports = router