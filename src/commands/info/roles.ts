module.exports = {
  name: "roles",
  category: "info",
  description: "Lists all server roles",
  permissions: 1,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    let roles = "";
    msg.guild.roles.cache.map((r) =>
      r.name != "@everyone" ? (roles += `${r} `) : ""
    );
    const embed = new MessageEmbed()
      .setAuthor(`All Roles`)
      .setDescription(roles ? roles : "No Roles");
    msg.reply({ embeds: [embed] });
  },
};
