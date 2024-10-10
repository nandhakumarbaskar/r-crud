const userController = require("../controllers/user.controller")
const router = require("express").Router()

router.post("/signUp", userController.signUp)
router.post("/login", userController.login)
// router.get("/:id", blogController.getBlogById)
// router.put("/:id", blogController.updateBlogById)
// router.delete("/:id", blogController.removeById)
// router.delete("/", blogController.removeAll)

module.exports = router