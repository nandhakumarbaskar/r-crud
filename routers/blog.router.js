const blogController = require("../controllers/blog.controller")
const router = require("express").Router()

router.post("/", blogController.createBlog)
router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlogById)
router.put("/:id", blogController.updateBlogById)
router.delete("/:id", blogController.removeById)
router.delete("/", blogController.removeAll)

module.exports = router