const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 2,
    trim: true,
  },
});

const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    user: {
      id: {
        type: Schema.Types.ObjectId,
        require: true,
      },
      name: {
        type: String,
        require: true,
      },
    },
  },
  { timestamps: true }
);

const users = mongoose.model("users", userSchema);
const posts = mongoose.model("posts", PostSchema);
module.exports = { users, posts };
