const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("Member to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for kick")
        .setRequired(false)
    ),
  permissions: 5,
  async execute(interaction) {
    const { Permissions, MessageEmbed } = require("discord.js");
    let person = interaction.options.getMember("member");
    let reason = interaction.options.getString("reason");

    if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      interaction.reply("Don't kick an admin");
    } else if (reason) {
      person.kick(reason);
      const kickEmbed = new MessageEmbed()
        .setTitle("Kicked")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      interaction.reply({ embeds: [kickEmbed] });

      let reply = await interaction.fetchReply();
      setTimeout(() => {
        reply.delete();
      }, 6000);
    } else {
      person.kick();
      interaction.reply(`Kicked <@${person.id}>`);
    }
  },
};
