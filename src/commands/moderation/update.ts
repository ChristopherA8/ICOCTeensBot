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
      .setTitle("Checklist Command")
      .setDescription(
        "The checklist command is back!\nIt should be a lot better now, try doing `!checklist help` for a list of examples."
      )
      .setColor("#47a8e8");

    webhookClient.send(" ", {
      username: "Update",
      // avatarURL: "https://i.imgur.com/wSTFkRM.png",
      embeds: [embed],
    });
  },
};
