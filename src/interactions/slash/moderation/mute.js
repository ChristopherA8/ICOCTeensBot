const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Mute a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("Member to mute")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("time")
        .setDescription("How long the user is timed out (in minutes)")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for mute")
        .setRequired(false)
    ),
  permissions: 5,
  async execute(interaction) {
    const { Permissions } = require("discord.js");

    let person = interaction.options.getMember("member");
    let time = interaction.options.getNumber("time");
    let reason = interaction.options.getString("reason");

    if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      interaction.reply({ content: "Don't mute an admin", ephemeral: true });
    } else if (reason) {
      await person.timeout(time * 60 * 1000, reason);

      interaction.reply({
        content: `Muted <@${person.user.id}> for \`${reason}\``,
        ephemeral: false,
      });
    } else {
      await person.timeout(time * 60 * 1000, reason);
      interaction.reply(`Muted <@${person.user.id}>`);
    }
  },
};
