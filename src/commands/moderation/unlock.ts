module.exports = {
  name: "unlock",
  permissions: 5,
  category: "moderation",
  description: "Unlock a channel",
  execute(msg) {
    msg.channel.permissionOverwrites.edit(msg.guild.roles.everyone, {
      SEND_MESSAGES: null,
    });
    msg.reply("Channel unlocked");
  },
};
