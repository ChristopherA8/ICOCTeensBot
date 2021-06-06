module.exports = {
  name: "update",
  permissions: 9,
  execute(msg) {
    const { WebhookClient, MessageEmbed } = require("discord.js");
    const { updateWebhook } = require("../../../config.json");

    const webhookClient = new WebhookClient(
      updateWebhook.id,
      updateWebhook.token
    );

    const embed = new MessageEmbed()
      .setTitle("Announcement")
      .setDescription(
        "The shop is dead until further notice\n||Nobody wanted it, and I no longer want to make it :)||"
      )
      .setColor("#47a8e8");

    webhookClient.send(" ", {
      username: "Update",
      // avatarURL: "https://i.imgur.com/wSTFkRM.png",
      embeds: [embed],
    });
  },
};
