module.exports = {
  name: "icon",
  permissions: 1,
  execute(msg) {
    msg.reply(msg.guild.iconURL({ dynamic: true }));
  },
};
