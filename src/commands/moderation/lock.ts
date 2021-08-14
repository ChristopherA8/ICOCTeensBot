module.exports = {
  name: "lock",
  permissions: 5,
  category: "moderation",
  description: "Lock a channel",
  execute(msg) {
    msg.channel.permissionOverwrites.edit(msg.guild.roles.everyone, {
      SEND_MESSAGES: false,
    });
    msg.reply("Channel locked");
  },
};
