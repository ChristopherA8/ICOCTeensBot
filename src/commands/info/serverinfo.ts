module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Get info about the server",
  permissions: 1,
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");

    let created = msg.guild.createdAt.toString().replace(/\([^)]*\)/g, "");

    const embed = new MessageEmbed()
      .setAuthor(`${msg.guild.name}`)
      .addFields(
        {
          name: "Member Count",
          value: `${msg.guild.memberCount}`,
          inline: true,
        },
        { name: "Created At", value: `${created}`, inline: true },
        {
          name: "Owner",
          value: `${await msg.guild.fetchOwner()}`,
          inline: false,
        },
        { name: "Boost Lvl", value: `${msg.guild.premiumTier}`, inline: true },
        {
          name: "Boosts",
          value: `${msg.guild.premiumSubscriptionCount}`,
          inline: true,
        }
      )
      .setThumbnail(msg.guild.iconURL({ dynamic: true, size: 128 }))
      .setColor(`#47a8e8`);
    msg.reply({ embeds: [embed] });
  },
};
