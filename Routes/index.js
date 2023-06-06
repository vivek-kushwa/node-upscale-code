const express = require("express");
const {
  signupUser,
  loginUser,
  createPost,
  getPost,
  updatePost,
  deletePost,
  getAllPosts,
} = require("../Controller");
const { validateMiddleware } = require("../middleware/validator");
const {
  signValidation,
  loginValidation,
  postValidation,
} = require("../utils/constant");
const { isAuth } = require("../middleware/isAuth");

const routes = express.Router();

// User routes
routes.post("/user/login", validateMiddleware(loginValidation), loginUser);
routes.post("/user/sign-up", validateMiddleware(signValidation), signupUser);

// Post routes
routes.post(
  "/posts/create",
  isAuth,
  validateMiddleware(postValidation),
  createPost
);
routes.get("/posts/:postId", isAuth, getPost);
routes.put("/posts/:postId", isAuth, updatePost);
routes.delete("/posts/:postId", isAuth, deletePost);
routes.get("/posts", isAuth, getAllPosts);

module.exports = routes;
