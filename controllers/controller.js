const { User } = require("../models/index");

class Controller {
  static async Login(req, res, next) {
    const payload = {
      username: req.body.username,
    };

    try {
      const user = await User.findOne({
        where: {
          username: payload.username,
        },
      });

      if (!user) {
        const newUser = await User.create(payload, { returning: true });
        res.status(201).json({ id: newUser.id, username: newUser.username });
      }
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
