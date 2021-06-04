module.exports = {
  name: "top",
  category: "xp",
  permissions: 1,
  execute(msg) {
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
    msg.reply(embed).then((message) => {
      message.react("◀");
      message.react("▶");
      const filter = (reaction, user) => {
        return (
          (reaction.emoji.name === "◀" || reaction.emoji.name === "▶") &&
          user.bot !== true
        );
      };
      const reactionCollector = message.createReactionCollector(filter, {
        time: 100000,
      });
      reactionCollector.on("collect", async (reaction, user) => {
        const userReactions = message.reactions.cache.filter((reaction) =>
          reaction.users.cache.has(user.id)
        );
        try {
          for (const reaction of userReactions.values()) {
            await reaction.users.remove(user.id);
          }
        } catch (error) {
          console.error("Failed to remove reactions.");
        }

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
          message.edit(embed);
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
          message.edit(embed);
        }
      });
    });
  },
};
