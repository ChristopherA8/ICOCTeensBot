module.exports = {
  name: "xp",
  execute(interaction) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/scores.sqlite");
    const { MessageEmbed } = require("discord.js");

    sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
    sql.prepare(
      "INSERT OR REPLACE INTO scores (id, user, guild, points, level, name) VALUES (@id, @user, @guild, @points, @level, @name);"
    );

    let score = sql
      .prepare("SELECT * FROM scores WHERE user = ? AND guild = ?")
      .get(interaction.user.id, "698590629344575500");
    if (!score) {
      interaction.reply("Talk to get some xp");
      return;
    }
    const embed = new MessageEmbed()
      .setAuthor(
        interaction.user.tag,
        interaction.user.displayAvatarURL({ dynamic: true })
      )
      .addFields(
        { name: "XP", value: `${score.points}`, inline: true },
        { name: "Level", value: `${score.level}`, inline: true }
      )
      .setColor("#47a8e8");
    interaction.reply({ embeds: [embed] });
  },
};
