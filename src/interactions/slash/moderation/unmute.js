const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unmute")
    .setDescription("Unmute a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("Member to Unmute")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for unmute")
        .setRequired(false)
    ),
  permissions: 5,
  async execute(interaction) {
    let person = interaction.options.getMember("member");
    let reason = interaction.options.getString("reason");

    if (person.id == interaction.member.id) {
      interaction.reply({
        content: "You can't unmute yourself",
        ephemeral: true,
      });
    } else if (reason) {
      await person.timeout(null, reason);
      interaction.reply({
        content: `Unmuted <@${person.user.id}> for \`${reason}\``,
        ephemeral: false,
      });
    } else {
      await person.timeout(null, reason);
      interaction.reply(`Unmuted <@${person.user.id}>`);
    }
  },
};
