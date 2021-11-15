module.exports = {
  name: "pause",
  permission: 1,
  category: "voice",
  description: "Pause music",
  async execute(msg) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    distube.pause(msg);
  },
};
