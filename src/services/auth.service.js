const axios = require("axios");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const API_URL = "https://66643f15932baf9032aa789c.mockapi.io/api/vi/";
const JWT_SECRET = process.env.JWT_SECRET;

exports.signup = async (userData) => {
  try {
    // Check if user with the same email already exists
    const existingUsers = await axios.get(
      `${API_URL}/users?email=${userData.email}`
    );
    if (existingUsers.data.length > 0) {
      throw new Error("User with this email already exists");
    }

    // If not, create a new user
    const newUser = await axios.post(`${API_URL}/users`, userData);
    return newUser.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // No existing user found, proceed with signup
      const newUser = await axios.post(`${API_URL}/users`, userData);
      return newUser.data;
    } else {
      throw new Error("Error creating user: " + error.message);
    }
  }
};

exports.login = async (email, password) => {
  try {
    const user = await axios.get(`${API_URL}/users?email=${email}`);
    if (user.data.length === 0) {
      throw new Error("User not found");
    }
    if (user.data[0].password !== password) {
      throw new Error("Incorrect password");
    }
    const token = generateToken(user.data[0].id);
    return token;
  } catch (error) {
    throw new Error("Error logging in: " + error.message);
  }
};

function generateToken(userId) {
  const token = jwt.sign({ userId: userId }, JWT_SECRET, { expiresIn: "1h" });
  return token;
}
