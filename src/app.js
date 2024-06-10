const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const blogRoutes = require("./routes/blogs.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

// Routes
app.use("/api/v1", blogRoutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;
