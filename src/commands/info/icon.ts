module.exports = {
  name: "icon",
  category: "info",
  permissions: 1,
  execute(msg) {
    msg.reply(msg.guild.iconURL({ dynamic: true }));
  },
};
