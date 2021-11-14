module.exports = {
  name: "xp",
  category: "xp",
  description: "Get members xp",
  permissions: 1,
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");

    const ping = msg.mentions.members.first();

    const { Points } = require("../../mongo/Mongo");

    const leaderboard = await Points.getLeaderboard();

    if (!ping) {
      let score = await Points.getPerson(msg.author.id);
      score = score[0];

      if (!score) {
        msg.reply("Talk to get some xp");
        return;
      }

      const hasTheRightId = ({ user }) => user == msg.author.id;
      let rank = leaderboard.findIndex(hasTheRightId) + 1;

      const embed = new MessageEmbed()
        .setAuthor(
          msg.author.tag,
          msg.author.displayAvatarURL({ dynamic: true })
        )
        .addFields(
          { name: "XP", value: `${score.points}`, inline: true },
          { name: "Level", value: `${score.level}`, inline: true },
          { name: "Rank", value: `#${rank}`, inline: true }
        )
        .setColor("#47a8e8");
      msg.reply({ embeds: [embed] });
    } else {
      let score = await Points.getPerson(ping.id);
      score = score[0];

      if (!score) {
        msg.reply("They need to talk to get xp");
        return;
      }

      const hasTheRightId = ({ user }) => user == ping.id;
      let rank = leaderboard.findIndex(hasTheRightId) + 1;

      const embed = new MessageEmbed()
        .setAuthor(ping.user.tag, ping.user.displayAvatarURL({ dynamic: true }))
        .addFields(
          { name: "XP", value: `${score.points}`, inline: true },
          { name: "Level", value: `${score.level}`, inline: true },
          { name: "Rank", value: `#${rank}`, inline: true }
        )
        .setColor("#47a8e8");
      msg.reply({ embeds: [embed] });
    }
  },
};
