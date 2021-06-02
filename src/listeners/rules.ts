module.exports = {
  listen(msg) {
    if (msg.channel.id !== "770730379077353494") return;
    msg.delete();
  },
};
