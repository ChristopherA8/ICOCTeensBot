const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a member")
    .addUserOption((option) =>
      option.setName("member").setDescription("Member to ban").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for ban")
        .setRequired(false)
    ),
  permissions: 5,
  async execute(interaction) {
    const { Permissions, MessageEmbed } = require("discord.js");
    let person = interaction.options.getMember("member");
    let reason = interaction.options.getString("reason");

    if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      interaction.reply("Don't ban an admin");
    } else if (reason) {
      person.ban({ reason: reason });
      const banEmbed = new MessageEmbed()
        .setTitle("Banned")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      interaction.reply({ embeds: [banEmbed] });

      let reply = await interaction.fetchReply();
      setTimeout(() => {
        reply.delete();
      }, 6000);
    } else {
      person.ban();
      interaction.reply(`Banned <@${person.id}>`);
    }
  },
};
