module.exports = {
  name: "uptime",
  category: "info",
  description: "How long the bot has been running",
  permissions: 1,
  execute(msg) {
    const {
      millisToMinutesAndSeconds,
    } = require("../../helpers/conversions.ts");

    msg.reply(`Uptime  ${millisToMinutesAndSeconds(msg.client.uptime)}`);
  },
};
