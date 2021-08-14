module.exports = {
  setup(client) {
    const { MessageEmbed } = require("discord.js");
    const { DisTube } = require("distube");
    const distube = new DisTube(client, {
      searchSongs: 0,
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

    distube
      .on("playSong", (queue, song) => {
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
          .setFooter(`${status(queue)}`)
          .setColor("#47a8e8");

        queue.textChannel.send({ embeds: [embed] });
      })
      .on("addSong", (queue, song) => {
        queue.textChannel.send(
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
      .on("addList", (queue, playlist) => {
        queue.textChannel.send(
          `Added \`${playlist.name}\` playlist (${
            playlist.songs.length
          } songs) to queue\n${status(queue)}`
        );
      })
      .on("error", (channel, e) => {
        console.error(e);
        channel.send("An error encountered: " + e);
      });
  },
};
