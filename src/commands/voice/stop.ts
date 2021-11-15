module.exports = {
  name: "stop",
  permission: 1,
  category: "voice",
  description: "Stop the music",
  async execute(msg) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    if (!distube.currentSong) return;
    distube.stop(msg);
  },
};
