module.exports = {
  name: "xp",
  category: "xp",
  description: "Get members xp",
  permissions: 1,
  execute(msg) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/scores.sqlite");
    const { MessageEmbed } = require("discord.js");

    const ping = msg.mentions.members.first();

    sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
    sql.prepare(
      "INSERT OR REPLACE INTO scores (id, user, guild, points, level, name) VALUES (@id, @user, @guild, @points, @level, @name);"
    );

    const leaderboard = sql
      .prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC")
      .all("698590629344575500");

    if (!ping) {
      let score = sql
        .prepare("SELECT * FROM scores WHERE user = ? AND guild = ?")
        .get(msg.author.id, "698590629344575500");

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
      let score = sql
        .prepare("SELECT * FROM scores WHERE user = ? AND guild = ?")
        .get(ping.id, "698590629344575500");
      if (!score) {
        msg.reply("They need to talk and get xp first");
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
