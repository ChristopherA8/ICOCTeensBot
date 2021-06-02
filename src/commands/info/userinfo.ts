module.exports = {
  name: "userinfo",
  permisions: 1,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    let ping = msg.mentions.members.first();

    let roles = "";
    let created;
    let joined;
    let embed;

    if (ping) {
      ping.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      created = ping.user.createdAt.toString().replace(/\([^)]*\)/g, "");
      joined = ping.joinedAt.toString().replace(/\([^)]*\)/g, "");
      embed = new MessageEmbed()
        .setAuthor(ping.user.tag)
        .setColor("#47a8e8")
        .setDescription(ping)
        .addFields(
          { name: "Created", value: created, inline: true },
          { name: "Joined", value: joined, inline: true },
          { name: "Nickname", value: ping.displayName, inline: true },
          { name: "Roles", value: roles ? roles : "No Roles", inline: false }
        )
        .setThumbnail(ping.user.displayAvatarURL({ dynamic: true, size: 128 }));
    } else {
      msg.member.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      created = msg.author.createdAt.toString().replace(/\([^)]*\)/g, "");
      joined = msg.member.joinedAt.toString().replace(/\([^)]*\)/g, "");
      embed = new MessageEmbed()
        .setAuthor(msg.author.tag)
        .setColor("#47a8e8")
        .setDescription(msg.member)
        .addFields(
          { name: "Created", value: created, inline: true },
          { name: "Joined", value: joined, inline: true },
          { name: "Nickname", value: msg.member.displayName, inline: true },
          { name: "Roles", value: roles ? roles : "No Roles", inline: false }
        )
        .setThumbnail(
          msg.author.displayAvatarURL({ dynamic: true, size: 128 })
        );
    }

    msg.reply(embed);
  },
};
