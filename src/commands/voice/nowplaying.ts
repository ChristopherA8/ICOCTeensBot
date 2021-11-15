module.exports = {
  name: "nowplaying",
  permission: 1,
  category: "voice",
  description: "Get the current song",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    const status = (queue) =>
      `Volume: ${queue.volume}% | Filter: ${queue.filter || "Off"} | Loop: ${
        queue.repeatMode
          ? queue.repeatMode == 2
            ? "All Queue"
            : "This Song"
          : "Off"
      } | Autoplay: ${queue.autoplay ? "On" : "Off"}`;

    let song = distube.currentSong;

    if (!distube.currentSong) {
      msg.reply("No Song Found");
      return;
    }

    const embed = new MessageEmbed()
      .setTitle(`${song.name}`)
      .setThumbnail(`${song.thumbnail ? song.thumbnail : ""}`)
      .addFields(
        {
          name: "Duration",
          value: `${song.formattedDuration}`,
          inline: true,
        },
        { name: "Requested by", value: `${song.user}`, inline: true }
      )
      .setFooter(`${status(distube.getQueue(msg))}`)
      .setColor("#47a8e8");

    msg.reply({ embeds: [embed] });
  },
};
