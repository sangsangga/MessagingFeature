const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/messageController");

router.get("/:conversationId", MessageController.FetchMessageByConversation);
router.post("/", MessageController.CreateMessage);
// router.get("/:id", ProductController.fetchProductsById);
// router.put("/:id", ProductController.updateProduct);
// router.delete("/:id", ProductController.destroyProduct);

module.exports = router;
