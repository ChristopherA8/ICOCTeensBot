module.exports = {
  name: "loop",
  permission: 1,
  category: "voice",
  description: "Toggle song repeating",
  execute(msg, args) {
    if (args[0] == "2") {
      msg.client.distube.setRepeatMode(msg, 2);
      msg.reply("Looping the entire queue");
    }
    let repeatMode = msg.client.distube.getQueue(msg)?.repeatMode;
    if (!args[0]) {
      if (repeatMode) {
        msg.client.distube.setRepeatMode(msg, 0);
        msg.reply("Looping is off");
      } else {
        msg.client.distube.setRepeatMode(msg, 1);
        msg.reply("Looping this song");
      }
    }
  },
};
