module.exports = {
  name: "userinfo",
  category: "info",
  description:
    "Gets your user info, you can also ping someone to get their info",
  permisions: 1,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    let ping = msg.mentions.members.first();

    let roles = "";
    let embed;

    if (ping) {
      ping.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      embed = new MessageEmbed()
        .setAuthor(`${ping.user.tag}`)
        .setColor("#47a8e8")
        .setDescription(`${ping}`)
        .addFields(
          {
            name: "Created",
            value: `<t:${ping.user.createdAt.getTime()}:f>`,
            inline: true,
          },
          {
            name: "Joined",
            value: `<t:${ping.joinedAt.getTime()}:f>`,
            inline: true,
          },
          { name: "Nickname", value: `${ping.displayName}`, inline: true },
          {
            name: "Roles",
            value: `${roles ? roles : "No Roles"}`,
            inline: false,
          }
        )
        .setThumbnail(
          `${ping.user.displayAvatarURL({ dynamic: true, size: 128 })}`
        );
    } else {
      msg.member.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      embed = new MessageEmbed()
        .setAuthor(`${msg.author.tag}`)
        .setColor("#47a8e8")
        .setDescription(`${msg.member}`)
        .addFields(
          {
            name: "Created",
            value: `<t:${msg.author.createdAt.getTime()}:f>`,
            inline: true,
          },
          {
            name: "Joined",
            value: `<t:${msg.member.joinedAt.getTime()}:f>`,
            inline: true,
          },
          {
            name: "Nickname",
            value: `${msg.member.displayName}`,
            inline: true,
          },
          {
            name: "Roles",
            value: `${roles ? roles : "No Roles"}`,
            inline: false,
          }
        )
        .setThumbnail(
          `${msg.author.displayAvatarURL({ dynamic: true, size: 128 })}`
        );
    }

    msg.reply({ embeds: [embed] });
  },
};
