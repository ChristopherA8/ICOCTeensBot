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
      .setTitle("New Commands")
      .setDescription(
        "Added `!lock` and `!unlock`, just type it in the channel you want to lock and people won't be able to send messages in it anymore. This includes staff without admin ._."
      )
      .setColor("#47a8e8");

    webhookClient.send(" ", {
      username: "Update",
      // avatarURL: "https://i.imgur.com/wSTFkRM.png",
      embeds: [embed],
    });
  },
};
