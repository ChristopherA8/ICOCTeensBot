const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pfp")
    .setDescription("Fetch users profile picture")
    .addUserOption((option) =>
      option.setName("member").setDescription("Other member").setRequired(false)
    ),
  permissions: 1,
  async execute(interaction) {
    let person = interaction.options.getMember("member");

    if (!person) {
      await interaction.reply(
        interaction.user.displayAvatarURL({ dynamic: true })
      );
    } else {
      await interaction.reply(person.user.displayAvatarURL({ dynamic: true }));
    }
  },
};
