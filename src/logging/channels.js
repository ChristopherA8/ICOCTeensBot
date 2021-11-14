module.exports = {
  log(client) {
    const AUDIT_LOG_ID = process.env.AUDIT_LOG_ID;

    const { embed } = require("../helpers/embed.ts");
    client.on("channelCreate", (newChannel) => {
      if (newChannel.type == "dm") return;
      if (newChannel.guild.id !== "698590629344575500") return;

      const channel = newChannel.guild.channels.cache.get(AUDIT_LOG_ID);
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      channel.send({
        embeds: [
          embed(
            "Channel Created",
            null,
            null,
            `#${newChannel.name}`,
            null,
            null,
            null,
            "#47a8e8",
            null
          ),
        ],
      });
    });

    client.on("channelDelete", (oldChannel) => {
      if (oldChannel.type == "dm") return;
      if (oldChannel.guild.id !== "698590629344575500") return;

      const channel = oldChannel.guild.channels.cache.get(AUDIT_LOG_ID);
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      channel.send({
        embeds: [
          embed(
            "Channel Deleted",
            null,
            null,
            `#${oldChannel.name}`,
            null,
            null,
            null,
            "#47a8e8",
            null
          ),
        ],
      });
    });

    client.on(`channelUpdate`, (before, after) => {
      if (after.guild.id !== `698590629344575500`) return; // Ignore emoji servers
      const channel = before.guild.channels.cache.get(AUDIT_LOG_ID);

      if (after.name !== before.name) {
        // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
        channel.send({
          embeds: [
            embed(
              "Channel Name Changed",
              null,
              null,
              `\`${before.name}\` to \`${after.name}\``,
              null,
              null,
              null,
              "#47a8e8",
              null
            ),
          ],
        });
      }

      if (after.topic !== before.topic) {
        // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
        channel.send({
          embeds: [
            embed(
              "Channel Description Changed",
              null,
              null,
              `\`${before.topic ? before.topic : "  "}\` to \`${
                after.topic ? after.topic : "  "
              }\`\n\nfor ${before}`,
              null,
              null,
              null,
              "#47a8e8",
              null
            ),
          ],
        });
      }
    });
  },
};
