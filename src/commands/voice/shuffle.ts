module.exports = {
  name: "shuffle",
  permission: 1,
  category: "voice",
  description: "Shuffle the queue",
  execute(msg) {
    msg.client.distube.shuffle(msg);
  },
};
