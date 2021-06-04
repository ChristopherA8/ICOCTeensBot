module.exports = {
  name: "queue",
  permission: 1,
  category: "voice",
  description: "Show the music queue",
  execute(msg) {
    let queue = msg.client.distube.getQueue(msg);
    if (!queue) {
      msg.reply("No songs in queue");
      return;
    }
    msg.channel.send(
      "Current queue:\n" +
        queue.songs
          .map(
            (song, id) => `${id + 1}. ${song.name} - ${song.formattedDuration}`
          )
          .slice(0, 10)
          .join("\n"),
      { code: "json" }
    );
  },
};
