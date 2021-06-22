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
      .setTitle("Fixed Bugs")
      .setDescription(
        "Bot will no longer reply to messages in <#770730379077353494> and <#803446581222309888>\nSlash commands are also disabled in these channels and will reply with an error message that only you can see"
        )
        .setColor("#47a8e8");
        //https://chr1s.dev/sharex/files/wgD843s.png
        webhookClient.send(" ", {
          username: "Update",
          // avatarURL: "https://i.imgur.com/wSTFkRM.png",
      embeds: [embed],
    });
  },
};
