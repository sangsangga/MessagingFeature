const express = require("express");
const router = express.Router();
const ConversationController = require("../controllers/conversationController");

router.get("/:conversationId", ConversationController.FetchConversationDetail);
router.post("/", ConversationController.CreateConversation);
router.get("/:userId", ConversationController.FetchAllConversation);

// router.get("/:id", ProductController.fetchProductsById);
// router.put("/:id", ProductController.updateProduct);
// router.delete("/:id", ProductController.destroyProduct);

module.exports = router;
