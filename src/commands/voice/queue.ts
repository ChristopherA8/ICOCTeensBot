module.exports = {
  name: "queue",
  permission: 1,
  category: "voice",
  description: "Show the music queue",
  async execute(msg) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    let queue = distube.getQueue(msg);
    if (!queue) {
      msg.reply("No songs in queue");
      return;
    }
    msg.channel.send(
      "Current queue:\n" +
        "```json\n" +
        queue.songs
          .map(
            (song, id) => `${id + 1}. ${song.name} - ${song.formattedDuration}`
          )
          .slice(0, 10)
          .join("\n") +
        "```"
    );
  },
};
