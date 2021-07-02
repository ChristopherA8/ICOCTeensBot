module.exports = {
  name: "emoji",
  permissions: 1,
  category: "misc",
  description: "Get a link to the last emoji sent in the channel",
  async execute(msg) {
    const hasEmoteRegex = /<a?:.+:\d+>/gm;
    const emoteRegex = /<:.+:(\d+)>/gm;
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm;

    const messages = await msg.channel.messages.fetch();
    const message = messages.find((m) => m.content.match(hasEmoteRegex));

    let emoji;

    if ((emoji = emoteRegex.exec(message))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1";
      msg.channel.send(url);
    } else if ((emoji = animatedEmoteRegex.exec(message))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1";
      msg.channel.send(url);
    } else {
      msg.channel.send("Couldn't find an emoji to paste!");
    }
  },
};
