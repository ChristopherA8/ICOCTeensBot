module.exports = {
  name: "uptime",
  category: "info",
  permissions: 1,
  execute(msg) {
    const {
      millisToMinutesAndSeconds,
    } = require("../../helpers/conversions.ts");

    msg.reply(`Uptime  ${millisToMinutesAndSeconds(msg.client.uptime)}`);
  },
};
