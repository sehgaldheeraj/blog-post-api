const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "sample_secret";
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  // console.log("IN AUTH MIDDLEWARE");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
