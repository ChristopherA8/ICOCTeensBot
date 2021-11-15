const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("top")
    .setDescription("Get xp leaderboard"),
  async execute(interaction) {
    const { MessageEmbed } = require("discord.js");
    const { Points } = require("../../../mongo/Mongo");

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
