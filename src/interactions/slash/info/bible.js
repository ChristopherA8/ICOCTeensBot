const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bible")
    .setDescription("Get a verse or verses from the bible")
    .addStringOption((option) =>
      option.setName("input").setDescription("Command input").setRequired(true)
    ),
  async execute(interaction) {
    let input = interaction.options.getString("input");
    args = input.split(/ +/);
    const axios = require("axios");
    let url = "";

    if (!args[3]) {
      url = "https://bible-api.com/" + args[0] + "+" + args[1] + ":" + args[2];
    } else {
      url =
        "https://bible-api.com/" +
        args[0] +
        "+" +
        args[1] +
        ":" +
        args[2] +
        "-" +
        args[3];
    }

    axios
      .get(url)
      .then((out) => {
        interaction.reply(out.data.text);
      })
      .catch((err) => {
        interaction.reply(
          "Verse not found\nExample Usage: !bible John 1 1\nor\n!bible John 1 1 2\n^^ That sends John 1:1-2"
        );
      });
  },
};
