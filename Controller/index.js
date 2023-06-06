const jwt = require("jsonwebtoken");
const { users, posts } = require("../modal");
const bcrypt = require("bcrypt");
exports.signupUser = async (req, res) => {
  try {
    const { name, email, password } = req?.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new users({
      name,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "user created Successfully :)",
      user: savedUser?._id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req?.body;
    const user = await users.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist with this email!" });
    }
    const isMatch = bcrypt.compare(password, user?.password);

    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign(
      { id: user?._id, name: user?.name },
      process.env.JWT_SECRET
    );
    // Convert the document to a plain JavaScript object
    const userObject = user.toObject();

    // Delete the password field from the user object
    delete userObject.password;
    res.status(200).json({ token, user: userObject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await posts.find();
    res.status(200).json({
      message: "Post Found Successfully :)",
      post,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await posts.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({
      message: "Post Found Successfully :)",
      post,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    console.log("gjoirebet", req.user);
    const { title, description } = req.body;
    const newPost = new posts({
      title,
      description,
      user: req.user,
    });

    const savedPost = await newPost.save();
    res.status(201).json({ data: savedPost });
  } catch (error) {
    console.log(error);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, description } = req.body;
    const post = await posts.findByIdAndUpdate(
      postId,
      { title, description },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({
      message: "Post update Successfully :)",
      post,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await posts.findByIdAndRemove(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(204).send("Post delete");
  } catch (error) {
    console.log(error);
  }
};
