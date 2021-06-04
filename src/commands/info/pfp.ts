module.exports = {
  name: "pfp",
  category: "info",
  description:
    "Get your profile picture, you can also ping someone to get their pfp",
  permissions: 1,
  execute(msg) {
    let ping = msg.mentions.members.first();
    if (!ping) {
      msg.reply(msg.author.displayAvatarURL({ dynamic: true }));
    } else {
      msg.reply(ping.user.displayAvatarURL({ dynamic: true }));
    }
  },
};
