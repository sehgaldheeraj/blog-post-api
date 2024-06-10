const axios = require("axios");

const BASE_URL = "https://66643f15932baf9032aa789c.mockapi.io/api/vi/";

exports.getAllBlogs = async (filters) => {
  let url = `${BASE_URL}/blogs`;

  if (filters) {
    const query = new URLSearchParams(filters).toString();
    url = `${url}?${query}`;
  }

  const response = await axios.get(url);
  return response.data;
};

exports.getBlogById = async (id) => {
  const response = await axios.get(`${BASE_URL}/blogs/${id}`);
  return response.data;
};

exports.createBlog = async (blogData) => {
  //Since mockapi doesn't support array of images, we will convert it to string
  if (Array.isArray(blogData.images)) {
    blogData.images = blogData.images.join(",");
  }
  const response = await axios.post(`${BASE_URL}/blogs`, blogData);
  return response.data;
};

exports.updateBlog = async (id, blogData) => {
  if (Array.isArray(blogData.images)) {
    blogData.images = blogData.images.join(",");
  }
  const response = await axios.put(`${BASE_URL}/blogs/${id}`, blogData);
  return response.data;
};

exports.deleteBlog = async (id) => {
  const response = await axios.delete(`${BASE_URL}/blogs/${id}`);
  return response.data;
};
