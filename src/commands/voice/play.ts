module.exports = {
  name: "play",
  permission: 1,
  category: "voice",
  description: "Play music in vc",
  execute(msg, args) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);

    if (!args[0]) {
      msg.reply(`Missing song name`);
      return;
    }
    msg.client.distube.play(msg, args.join(" "));
  },
};
