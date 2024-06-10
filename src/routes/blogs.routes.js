const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blogs.controller");
const authMiddleware = require("../middlewares/auth.middleware");
// console.log("IN ROUTES");

router.get("/blogs", BlogController.getAllBlogs);
router.get("/blogs/:id", BlogController.getBlogById);
router.post("/blogs", authMiddleware, BlogController.createBlog);
router.put("/blogs/:id", authMiddleware, BlogController.updateBlog);
router.delete("/blogs/:id", authMiddleware, BlogController.deleteBlog);

module.exports = router;
