const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("xp")
    .setDescription("Get users xp")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("Get xp of another member")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { MessageEmbed } = require("discord.js");

    const { Points } = require("../../../mongo/Mongo");

    let person = interaction.options.getMember("member");

    const leaderboard = await Points.getLeaderboard();

    if (!person) {
      let score = await Points.getPerson(interaction.user.id);
      score = score[0];

      if (!score) {
        interaction.reply({
          content: "Talk to get some xp",
          ephemeral: true,
        });
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
    } else {
      let score = await Points.getPerson(person.user.id);
      score = score[0];

      if (!score) {
        interaction.reply({
          content: "They need to talk to get xp",
          ephemeral: true,
        });
        return;
      }

      const hasTheRightId = ({ user }) => user == person.user.id;
      let rank = leaderboard.findIndex(hasTheRightId) + 1;

      const embed = new MessageEmbed()
        .setAuthor(
          person.user.tag,
          person.user.displayAvatarURL({ dynamic: true })
        )
        .addFields(
          { name: "XP", value: `${score.points}`, inline: true },
          { name: "Level", value: `${score.level}`, inline: true },
          { name: "Rank", value: `#${rank}`, inline: true }
        )
        .setColor("#47a8e8");
      interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};
