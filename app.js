const express = require("express");
const router = require("./Routes");
require("dotenv").config();
let app = express();
// for encoded the json from the body
app.use(express.json());
const PORT = process.env.PORT;
app.use(router)
app.listen(PORT, () => {
  console.log("server is listen at port" + PORT);
});
