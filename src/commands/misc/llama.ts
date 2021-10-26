module.exports = {
  name: "llama",
  category: "misc",
  description: "Sends a llama",
  permissions: 1,
  execute(msg) {
    msg.channel.send(
      "https://tenor.com/view/no-llama-purple-llama-wave-your-head-gif-14993832"
    );
  },
};
