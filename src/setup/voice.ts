module.exports = {
  setup(client) {
    const { MessageEmbed } = require("discord.js");
    const DisTube = require("distube");
    const distube = new DisTube(client, {
      searchSongs: false,
      emitNewSongOnly: true,
    });
    client.distube = distube;

    const status = (queue) =>
      `Volume: ${queue.volume}% | Filter: ${queue.filter || "Off"} | Loop: ${
        queue.repeatMode
          ? queue.repeatMode == 2
            ? "All Queue"
            : "This Song"
          : "Off"
      } | Autoplay: ${queue.autoplay ? "On" : "Off"}`;

    client.distube
      .on("playSong", (message, queue, song) => {
        client.currentSong = song;

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
          .setFooter(`${status(message.client.distube.getQueue(message))}`)
          .setColor("#47a8e8");

        message.reply(embed);
      })
      .on("addSong", (message, queue, song) => {
        message.reply(
          `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
        );
      })
      .on("playList", (message, queue, playlist, song) => {
        message.reply(
          `Play \`${playlist.name}\` playlist (${
            playlist.songs.length
          } songs).\nRequested by: ${song.user}\nNow playing \`${
            song.name
          }\` - \`${song.formattedDuration}\`\n${status(queue)}`
        );
      })
      .on("addList", (message, queue, playlist) => {
        message.reply(
          `Added \`${playlist.name}\` playlist (${
            playlist.songs.length
          } songs) to queue\n${status(queue)}`
        );
      })
      .on("error", (message, e) => {
        console.error(e);
        message.reply("An error encountered: " + e);
      });
  },
};
