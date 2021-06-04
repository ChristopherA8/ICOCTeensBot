module.exports = {
  name: "skip",
  permission: 1,
  category: "voice",
  description: "Skip to next song in queue",
  execute(msg) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    msg.client.distube.skip(msg);
  },
};
