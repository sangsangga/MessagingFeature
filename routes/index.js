const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.post("/login", Controller.Login);

module.exports = router;
