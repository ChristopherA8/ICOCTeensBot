module.exports = {
  log(client) {
    const AUDIT_LOG_ID = "759967435309842494";
    const { embed } = require("../helpers/embed.ts");
    const { secondsToHms } = require("../helpers/conversions.ts");

    client.on("inviteCreate", (invite) => {
      if (invite.guild.id !== "698590629344575500") return;
      const channel = invite.guild.channels.cache.get(AUDIT_LOG_ID);
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      let maxUses = invite.maxUses;
      if (invite.maxUses == "0") maxUses = "no limit";
      channel.send(
        embed(
          "Invite Created",
          null,
          null,
          null,
          [
            { name: "URL", value: `${invite.url}`, inline: false },
            { name: "Creator", value: `${invite.inviter}`, inline: false },
            { name: "Max Uses", value: `${maxUses}`, inline: true },
            {
              name: "Duration",
              value: `${secondsToHms(invite.maxAge)}`,
              inline: true,
            },
          ],
          null,
          null,
          "#47a8e8",
          null
        )
      );
    });
  },
};
