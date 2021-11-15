module.exports = {
  name: "shuffle",
  permission: 1,
  category: "voice",
  description: "Shuffle the queue",
  async execute(msg) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    if (distube.getQueue(msg)) {
      distube.shuffle(msg);
      msg.reply("Queue Shuffled");
    } else {
      msg.reply("Empty Queue");
      return;
    }
  },
};
