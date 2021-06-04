module.exports = {
  name: "stop",
  permission: 1,
  category: "voice",
  description: "Stop the music",
  execute(msg) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    if (!msg.client.currentSong) return;
    msg.client.distube.stop(msg);
  },
};
