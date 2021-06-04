module.exports = {
  name: "icon",
  category: "info",
  description: "Get server icon",
  permissions: 1,
  execute(msg) {
    msg.reply(msg.guild.iconURL({ dynamic: true }));
  },
};
