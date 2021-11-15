module.exports = {
  name: "loop",
  permission: 1,
  category: "voice",
  description: "Toggle song repeating",
  async execute(msg, args) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    if (args[0] == "2") {
      distube.setRepeatMode(msg, 2);
      msg.reply("Looping the entire queue");
    }
    let repeatMode = distube.getQueue(msg)?.repeatMode;
    if (!args[0]) {
      if (repeatMode) {
        distube.setRepeatMode(msg, 0);
        msg.reply("Looping is off");
      } else {
        distube.setRepeatMode(msg, 1);
        msg.reply("Looping this song");
      }
    }
  },
};
