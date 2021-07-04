module.exports = {
  name: "poll",
  category: "misc",
  description: "Quickly make a poll embed",
  permissions: 9,
  async execute(msg, args) {
    let input = args.join(" ");
    input = input.split(",");

    let title = input[0];
    console.log(title);

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

    // const { MessageEmbed } = require("discord.js");
    // const embed = new MessageEmbed()
    //   .setTitle(title)
    //   .setDescription("🐕 Dog\n🐈 Cat");

    // msg.channel.send(embed).then((message) => {
    //   message.react("🐕");
    //   message.react("🐈");
    // });
  },
};
