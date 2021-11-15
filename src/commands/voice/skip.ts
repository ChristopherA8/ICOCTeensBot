module.exports = {
  name: "skip",
  permission: 1,
  category: "voice",
  description: "Skip to next song in queue",
  async execute(msg) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    distube.skip(msg);
  },
};
