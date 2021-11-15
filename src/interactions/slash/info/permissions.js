const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("permissions")
    .setDescription("Check a users permissions")
    .addUserOption((option) =>
      option.setName("member").setDescription("Other member").setRequired(false)
    ),
  async execute(interaction) {
    const { MessageEmbed, Permissions } = require("discord.js");

    const member = interaction.options.getMember("member");
    if (!member) {
      let embed = new MessageEmbed().setTitle(
        `${interaction.user.tag}'s Permissions`
      );
      let desc = "";

      for (const permission in Permissions.FLAGS) {
        if (interaction.member.permissions.has(permission))
          desc += permission + "\n";
      }

      embed.setDescription(
        "```" + desc ? desc : "This member has literally no perms lol" + "````"
      );

      interaction.reply({ embeds: [embed] });
    } else {
      let embed = new MessageEmbed().setTitle(
        `${member.user.tag}'s Permissions`
      );
      let desc = "";

      for (const permission in Permissions.FLAGS) {
        if (member.permissions.has(permission)) desc += permission + "\n";
      }

      embed.setDescription(
        "```" + desc ? desc : "This member has literally no perms lol" + "````"
      );

      interaction.reply({ embeds: [embed] });
    }
  },
};
