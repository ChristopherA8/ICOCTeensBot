module.exports = {
  name: "about",
  category: "info",
  description: "Gives information about the bot",
  permissions: 1,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("About ICOC Teens Bot")
      .setURL("https://github.com/Chr1sDev/ICOCTeensBot")
      .setDescription(
        `The ICOC Teens Bot is the primary bot for the ICOC Teens server. It aims to replace all other bots except <@763464598959292458> :)  It's primary use is for XP/Leveling and Moderation, but it includes 75+ other commands for entertainment and information. To get started use \`/help\` for a list of commands`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/761792910088994816/d8ec1936c5cbdfc92b2ece17f79c5095.webp"
      )
      .setFooter(
        "Developed by Chr1s (christopher#8888)",
        "https://cdn.discordapp.com/avatars/279032930926592000/a_73ce23911547d6638df3f7f70c791c0f.gif"
      )
      .setColor(`#47a8e8`);
    msg.reply(embed);
  },
};
