module.exports = {
  name: "play",
  permission: 1,
  execute(msg, args) {
    msg.client.distube.play(msg, args.join(" "));
  },
};
