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
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for mute")
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

    if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      interaction.reply({ content: "Don't mute an admin", ephemeral: true });
    } else if (reason) {
      person.roles.add(muteRole, reason);

      const muteEmbed = new MessageEmbed()
        .setTitle("Muted")
        .addFields(
          { name: "User", value: `<@${person.user.id}>` },
          { name: "Reason", value: reason }
        );
      interaction.reply({ embeds: [muteEmbed] });

      let reply = await interaction.fetchReply();
      setTimeout(() => {
        reply.delete();
      }, 6000);
    } else {
      person.roles.add(muteRole);
      interaction.reply(`Muted <@${person.user.id}>`);
    }
  },
};
