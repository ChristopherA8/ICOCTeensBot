module.exports = {
  name: "top",
  category: "xp",
  description: "Get XP Leaderboard",
  permissions: 1,
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const { Points } = require("../../mongo/Mongo");

    const leaderboard = await Points.getLeaderboard();

    let start = 0;
    let end = 5;

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

    msg.reply({ embeds: [embed] }).then(async (message) => {
      await message.react("◀");
      await message.react("▶");

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
