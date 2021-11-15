const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roles")
    .setDescription("Lists all server roles"),
  async execute(interaction) {
    const { MessageEmbed } = require("discord.js");
    let roles = "";
    interaction.guild.roles.cache.map((r) =>
      r.name != "@everyone" ? (roles += `${r} `) : ""
    );
    const embed = new MessageEmbed()
      .setAuthor(`All Roles`)
      .setDescription(roles ? roles : "No Roles");
    interaction.reply({ embeds: [embed] });
  },
};
