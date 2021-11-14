module.exports = {
  name: "update",
  permissions: 9,
  execute(msg) {
    const { WebhookClient, MessageEmbed } = require("discord.js");

    const webhookClient = new WebhookClient({
      id: process.env.UPDATE_ID,
      token: process.env.UPDATE_TOKEN,
      url: process.env.UPDATE_WEBHOOK,
    });

    const embed = new MessageEmbed()
      .setTitle("Enhancements")
      .setDescription("Image logging is back")
      .setColor("#47a8e8");
    //https://chr1s.dev/sharex/files/wgD843s.png
    webhookClient.send({ embeds: [embed] });
  },
};
