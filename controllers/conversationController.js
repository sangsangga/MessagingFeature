const {
  User,
  Message,
  Conversation,
  UserConversation,
} = require("../models/index");

class ConversationController {
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

      const convSender = await UserConversation.create({
        userId: payload.userId,
        conversationId: conversation.id,
      });

      const convReceiver = await UserConversation.create({
        userId: payload.userTarget,
        conversationId: conversation.id,
      });

      res.status(201).json({ message: "Conversation Created Successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async FetchAllConversation(req, res, next) {
    try {
      const payload = {
        userId: req.loggedIn,
      };
      const conversation = await Conversation.create(
        { userId: payload.userId },
        { returning: true }
      );

      const convSender = await UserConversation.create({
        userId: payload.userId,
        conversationId: conversation.id,
      });

      const convReceiver = await UserConversation.create({
        userId: payload.userTarget,
        conversationId: conversation.id,
      });

      res.status(201).json({ message: "Conversation Created Successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async FetchConversationDetail(req, res, next) {
    try {
      const conversationId = +req.params.conversationId;

      const conversation = await Conversation.findByPk(conversationId, {
        include: [
          {
            model: User,
          },
        ],
      });

      res.status(200).json(conversation);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConversationController;
