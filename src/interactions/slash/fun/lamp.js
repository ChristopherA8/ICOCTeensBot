const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lamp")
    .setDescription("Change my lamp color"),
  permissions: 1,
  async execute(interaction) {
    fetch("http://68.92.112.70:3000/random");
    interaction.reply("Light color changed");
  },
};
