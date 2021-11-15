module.exports = {
  name: "xp",
  async execute(interaction) {
    const { MessageEmbed } = require("discord.js");

    const { Points } = require("../../../mongo/Mongo");

    const leaderboard = await Points.getLeaderboard();
    let score = await Points.getPerson(interaction.user.id);
    score = score[0];

    if (!score) {
      interaction.reply("Talk to get some xp");
      return;
    }

    const hasTheRightId = ({ user }) => user == interaction.user.id;
    let rank = leaderboard.findIndex(hasTheRightId) + 1;

    const embed = new MessageEmbed()
      .setAuthor(
        interaction.user.tag,
        interaction.user.displayAvatarURL({ dynamic: true })
      )
      .addFields(
        { name: "XP", value: `${score.points}`, inline: true },
        { name: "Level", value: `${score.level}`, inline: true },
        { name: "Rank", value: `#${rank}`, inline: true }
      )
      .setColor("#47a8e8");
    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
