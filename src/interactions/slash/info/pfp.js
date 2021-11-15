const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pfp")
    .setDescription("Fetch users profile picture"),
  permissions: 1,
  async execute(interaction) {
    await interaction.reply(
      interaction.user.displayAvatarURL({ dynamic: true })
    );
  },
};
