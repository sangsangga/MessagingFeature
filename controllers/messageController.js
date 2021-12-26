const {
  User,
  Message,
  Conversation,
  UserConversation,
} = require("../models/index");

class MessageController {
  static async CreateConversation(req, res, next) {
    try {
      const payload = {
        userId: req.body.userId,
        message: req.body.message,
        userTarget: req.body.userTarget,
      };
      const conversation = await Conversation.create(
        { userId: payload.userId },
        { returning: true }
      );

      const convSender = await UserConversation.Create({
        userId: payload.userId,
        conversationId: conversation.id,
      });

      const convReceiver = await UserConversation.Create({
        userId: payload.userTarget,
        conversationId: conversation.id,
      });

      res.status(201).json({ message: "Conversation Created Successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async CreateMessage(req, res, next) {
    try {
      const payload = {
        conversationId: req.body.conversationId,
        message: req.body.message,
        userId: req.body.userId,
      };

      const message = await message.Create(payload, { returning: true });

      res.status(201).json({ message: "Message Created Successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessageController;
