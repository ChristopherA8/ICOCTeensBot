module.exports = {
  name: "permissions",
  category: "info",
  description: "Check a users permissions",
  permissions: 1,
  execute(msg) {
    const { MessageEmbed, Permissions } = require("discord.js");

    let ping = msg.mentions.members.first();
    if (!ping) {
      let embed = new MessageEmbed().setTitle(
        `${msg.author.tag}'s Permissions`
      );
      let desc = "";

      for (const permission in Permissions.FLAGS) {
        if (msg.member.permissions.has(permission)) desc += permission + "\n";
      }

      embed.setDescription(
        "```" + desc ? desc : "This member has literally no perms lol" + "````"
      );

      msg.reply({ embeds: [embed] });
    } else {
      let embed = new MessageEmbed().setTitle(`${ping.user.tag}'s Permissions`);
      let desc = "";

      for (const permission in Permissions.FLAGS) {
        if (ping.permissions.has(permission)) desc += permission + "\n";
      }

      embed.setDescription(
        "```" + desc ? desc : "This member has literally no perms lol" + "````"
      );

      msg.reply({ embeds: [embed] });
    }
  },
};
