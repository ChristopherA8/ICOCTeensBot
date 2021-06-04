module.exports = {
  name: "shuffle",
  permission: 1,
  category: "voice",
  description: "Shuffle the queue",
  execute(msg) {
    if (msg.client.distube.getQueue(msg)) {
      msg.client.distube.shuffle(msg);
      msg.reply("Queue Shuffled");
    } else {
      msg.reply("Empty Queue");
      return;
    }
  },
};
