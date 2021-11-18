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
    const { Permissions, MessageEmbed } = require("discord.js");
    const muteRole = interaction.guild.roles.cache.get(
      process.env.MUTED_ROLE_ID
    );

    let person = interaction.options.getMember("member");
    let reason = interaction.options.getString("reason");

    if (person.id == interaction.member.id) {
      interaction.reply({
        content: "You can't unmute yourself",
        ephemeral: true,
      });
    } else if (reason) {
      person.roles.remove(muteRole, reason);

      const unmuteEmbed = new MessageEmbed()
        .setTitle("Unmuted")
        .addFields(
          { name: "User", value: `<@${person.user.id}>` },
          { name: "Reason", value: reason }
        );
      interaction.reply({ embeds: [unmuteEmbed] });

      let reply = await interaction.fetchReply();
      setTimeout(() => {
        reply.delete();
      }, 6000);
    } else {
      person.roles.remove(muteRole);
      interaction.reply(`Unmuted <@${person.user.id}>`);
    }
  },
};
