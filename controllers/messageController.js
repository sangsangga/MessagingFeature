const {
  User,
  Message,
  Conversation,
  UserConversation,
} = require("../models/index");

class MessageController {
  static async CreateMessage(req, res, next) {
    try {
      console.log(req.headers, "<< headers");
      const payload = {
        ConversationId: req.body.conversationId,
        message: req.body.message,
        UserId: req.headers.userid,
      };

      const message = await Message.create(payload, { returning: true });

      res.status(201).json({ message: "Message Created Successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async FetchMessageByConversation(req, res, next) {
    try {
      console.log(req.params, "<< params");
      const payload = {
        conversationId: +req.params.conversationId,
      };

      console.log(payload, "<<< payload");

      const messages = await Message.findAll({
        where: {
          ConversationId: payload.conversationId,
        },
        order: ["createdAt"],
      });

      res.status(200).json({ data: messages });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessageController;
