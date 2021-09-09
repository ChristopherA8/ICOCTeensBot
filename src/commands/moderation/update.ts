module.exports = {
  name: "update",
  permissions: 9,
  execute(msg) {
    const { WebhookClient, MessageEmbed } = require("discord.js");
    const { updateWebhook } = require("../../../config.json");

    const webhookClient = new WebhookClient({
      id: updateWebhook.id,
      token: updateWebhook.token,
      url: updateWebhook.url,
    });

    const embed = new MessageEmbed()
      .setTitle("Enhancements")
      .setDescription("Image logging is back")
      .setColor("#47a8e8");
    //https://chr1s.dev/sharex/files/wgD843s.png
    webhookClient.send({ embeds: [embed] });
  },
};
