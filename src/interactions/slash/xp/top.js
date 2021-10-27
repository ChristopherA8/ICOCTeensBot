module.exports = {
  name: "top",
  execute(interaction) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/scores.sqlite");
    let start = 0;
    let end = 5;

    const leaderboard = sql
      .prepare(
        "SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 50"
      )
      .all("698590629344575500");

    const embed = new MessageEmbed()
      .setTitle("Leaderboard")
      .setColor("#47a8e8");

    for (let i = start; i < end; i++) {
      embed.addField(
        `#${i + 1} ` + leaderboard[i].name,
        "XP " + leaderboard[i].points,
        false
      );
    }

    interaction.reply({ embeds: [embed] });
    interaction.fetchReply().then((message) => {
      message.react("◀");
      message.react("▶");

      const filter = (reaction, user) => {
        return (
          (reaction.emoji.name === "◀" || reaction.emoji.name === "▶") &&
          !user.bot
        );
      };

      const reactionCollector = message.createReactionCollector({
        filter,
        time: 100000,
      });

      reactionCollector.on("collect", async (reaction, user) => {
        await reaction.users.remove(user.id);

        if (reaction.emoji.name === "◀" && start > 0) {
          start -= 5;
          end -= 5;
          embed.fields = [];
          for (let i = start; i < end; i++) {
            embed.addField(
              `#${i + 1} ` + leaderboard[i].name,
              "XP " + leaderboard[i].points,
              false
            );
          }
          message.edit({ embeds: [embed] });
        }

        if (reaction.emoji.name === "▶" && end < 50) {
          start += 5;
          end += 5;
          embed.fields = [];
          for (let i = start; i < end; i++) {
            embed.addField(
              `#${i + 1} ` + leaderboard[i].name,
              "XP " + leaderboard[i].points,
              false
            );
          }

          message.edit({ embeds: [embed] });
        }
      });
    });
  },
};
