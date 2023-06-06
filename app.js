const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const { users } = require("./modal");
require("dotenv").config();

const PORT = process.env.PORT;
let app = express();

// for encoded the json from the body
app.use(express.json());
app.use(router);

// db connection
mongoose.connect(process.env.MONGOOSE_CONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log("server is listen at port " + PORT);
  });
});


