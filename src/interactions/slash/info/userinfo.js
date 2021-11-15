const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Gets your info or someone elses")
    .addUserOption((option) =>
      option.setName("member").setDescription("Other member").setRequired(false)
    ),
  async execute(interaction) {
    const { MessageEmbed } = require("discord.js");
    const member = interaction.options.getMember("member");

    let roles = "";
    let embed;

    if (member) {
      member.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      embed = new MessageEmbed()
        .setAuthor(`${member.user.tag}`)
        .setColor("#47a8e8")
        .setDescription(`${member}`)
        .addFields(
          {
            name: "Created",
            value: `<t:${Math.trunc(
              member.user.createdAt.getTime() / 1000
            )}:f>`,
            inline: true,
          },
          {
            name: "Joined",
            value: `<t:${Math.trunc(member.joinedAt.getTime() / 1000)}:f>`,
            inline: true,
          },
          { name: "Nickname", value: `${member.displayName}`, inline: true },
          {
            name: "Roles",
            value: `${roles ? roles : "No Roles"}`,
            inline: false,
          }
        )
        .setThumbnail(
          `${member.user.displayAvatarURL({ dynamic: true, size: 128 })}`
        );
    } else {
      interaction.member.roles.cache.map((r) =>
        r.name != "@everyone" ? (roles += `${r} `) : ""
      );
      embed = new MessageEmbed()
        .setAuthor(`${interaction.user.tag}`)
        .setColor("#47a8e8")
        .setDescription(`${interaction.member}`)
        .addFields(
          {
            name: "Created",
            value: `<t:${Math.trunc(
              interaction.user.createdAt.getTime() / 1000
            )}:f>`,
            inline: true,
          },
          {
            name: "Joined",
            value: `<t:${Math.trunc(
              interaction.member.joinedAt.getTime() / 1000
            )}:f>`,
            inline: true,
          },
          {
            name: "Nickname",
            value: `${interaction.member.displayName}`,
            inline: true,
          },
          {
            name: "Roles",
            value: `${roles ? roles : "No Roles"}`,
            inline: false,
          }
        )
        .setThumbnail(
          `${interaction.user.displayAvatarURL({ dynamic: true, size: 128 })}`
        );
    }
    interaction.reply({ embeds: [embed] });
  },
};
