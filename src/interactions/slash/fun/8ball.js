const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("uh oh")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("8ball question")
        .setRequired(true)
    ),
  permissions: 1,
  async execute(interaction) {
    const fetch = require(`node-fetch`);
    let message = interaction.options.getString("question");
    let uri =
      "https://8ball.delegator.com/magic/JSON/" + encodeURIComponent(message);
    fetch(uri)
      .then((res) => res.json())
      .then((json) => {
        interaction.reply({ content: `"${message}": ${json.magic.answer}` });
      });
  },
};
