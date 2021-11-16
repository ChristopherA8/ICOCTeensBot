const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unlock")
    .setDescription("Unlock a channel"),
  permissions: 1,
  async execute(interaction) {
    interaction.channel.permissionOverwrites.edit(
      interaction.guild.roles.everyone,
      {
        SEND_MESSAGES: null,
      }
    );
    interaction.reply("Channel locked");
  },
};
