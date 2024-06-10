const BlogService = require("../services/blog.service");
const AuthService = require("../services/auth.service");

exports.getAllBlogs = async (req, res) => {
  try {
    const filters = {};
    if (req.query.title) filters.title = req.query.title;
    if (req.query.authorId) filters.authorId = req.query.authorId;
    const blogs = await BlogService.getAllBlogs(filters);
    res.json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      authorId: req.user.id,
      images: req.body.images,
    };
    // console.log("IN CONTROLLER");
    const blog = await BlogService.createBlog(blogData);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      authorId: req.user.id,
      images: req.body.images,
    };
    const blog = await BlogService.updateBlog(req.params.id, blogData);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await BlogService.deleteBlog(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
