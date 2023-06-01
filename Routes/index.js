const express = require("express");
const { getData, postData, deleteData } = require("../Controller");
const router = express.Router();

router.get("/", getData);
router.post("/post", postData);
router.delete("/delete", deleteData);

module.exports = router;
