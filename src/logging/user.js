module.exports = {
  log(client) {
    const { channels } = require("../../config.json");
    const AUDIT_LOG_ID = channels["AUDIT_LOG_ID"];

    const { embed } = require("../helpers/embed.ts");
    client.on("guildMemberUpdate", async (before, after) => {
      if (after.guild.id !== `698590629344575500`) return;
      const channel = before.guild.channels.cache.get(AUDIT_LOG_ID);

      // Check for removed role
      before.roles.cache.forEach((beforeRole) => {
        if (
          !after.roles.cache.find((afterRole) => afterRole.id === beforeRole.id)
        ) {
          // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
          channel.send({
            embeds: [
              embed(
                "Role Removed",
                null,
                null,
                `${beforeRole} from ${before.user.tag}`,
                null,
                null,
                null,
                "#47a8e8",
                before.user.displayAvatarURL({ dynamic: true, size: 64 })
              ),
            ],
          });
        }
      });

      // Check for added role
      after.roles.cache.forEach((beforeRole) => {
        if (
          !before.roles.cache.find(
            (afterRole) => afterRole.id === beforeRole.id
          )
        ) {
          // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
          channel.send({
            embeds: [
              embed(
                "Role Added",
                null,
                null,
                `${beforeRole} to ${before.user.tag}`,
                null,
                null,
                null,
                "#47a8e8",
                before.user.displayAvatarURL({ dynamic: true, size: 64 })
              ),
            ],
          });
        }
      });

      if (before.nickname !== after.nickname) {
        // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
        channel.send({
          embeds: [
            embed(
              "Nickname Changed",
              null,
              null,
              `\`${before.nickname}\` to \`${after.nickname}\`\n\nfor ${before.user.tag}`,
              null,
              null,
              null,
              "#47a8e8",
              before.user.displayAvatarURL({ dynamic: true, size: 64 })
            ),
          ],
        });
      }
    });

    client.on(`userUpdate`, (before, after) => {
      const channel = before.client.channels.cache.find(
        (channel) => channel.id === AUDIT_LOG_ID
      );

      if (before.username !== after.username) {
        // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
        channel.send({
          embeds: [
            embed(
              "Username Changed",
              null,
              null,
              `\`${before.username}\` to \`${after.username}\``,
              null,
              null,
              null,
              "#47a8e8",
              before.displayAvatarURL({ dynamic: true, size: 64 })
            ),
          ],
        });
      }
    });
  },
};
