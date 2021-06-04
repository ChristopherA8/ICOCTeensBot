module.exports = {
  name: "pause",
  permission: 1,
  category: "voice",
  description: "Pause music",
  execute(msg) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    msg.client.distube.pause(msg);
  },
};
