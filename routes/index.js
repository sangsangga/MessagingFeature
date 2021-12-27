const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const routerMessage = require("./messageRoutes");
const routerConversation = require("./conversationRoutes");

router.post("/login", Controller.Login);
router.use("/message", routerMessage);
router.use("/conversation", routerConversation);

module.exports = router;
