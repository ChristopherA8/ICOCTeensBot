module.exports = {
  name: "jumbo",
  permissions: 1,
  category: "misc",
  description: "Jumboify ur emoji",
  async execute(msg) {
    const hasEmoteRegex = /<a?:.+:\d+>/gm;
    const emoteRegex = /<:.+:(\d+)>/gm;
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm;

    let emoji;

    if ((emoji = emoteRegex.exec(msg))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1";
      msg.channel.send(url);
    } else if ((emoji = animatedEmoteRegex.exec(msg))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1";
      msg.channel.send(url);
    } else {
      msg.channel.send("Couldn't find an emoji to paste!");
    }
  },
};
