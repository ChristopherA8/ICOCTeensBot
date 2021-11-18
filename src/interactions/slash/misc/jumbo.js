const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jumbo")
    .setDescription("Get a large image of your emoji")
    .addStringOption((option) =>
      option
        .setName("emoji")
        .setDescription("Emoji to make big")
        .setRequired(true)
    ),
  permissions: 1,
  async execute(interaction) {
    // const hasEmoteRegex = /<a?:.+:\d+>/gm;
    const emoteRegex = /<:.+:(\d+)>/gm;
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm;

    let input = interaction.options.getString("emoji");
    let emoji;

    if ((emoji = emoteRegex.exec(input))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1";
      interaction.reply(url);
    } else if ((emoji = animatedEmoteRegex.exec(input))) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1";
      interaction.reply(url);
    } else {
      interaction.reply({content: "Couldn't find an emoji to paste!", ephemeral: true});
    }
  },
};
