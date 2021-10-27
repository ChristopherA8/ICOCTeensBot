module.exports = {
  event(client) {
    const { MessageEmbed } = require("discord.js");

    client.on("guildMemberUpdate", async (before, after) => {
      if (after.guild.id !== `698590629344575500`) return;
      // Check for added role
      after.roles.cache.forEach((beforeRole) => {
        if (
          !before.roles.cache.find(
            (afterRole) => afterRole.id === beforeRole.id
          )
        ) {
          if (beforeRole.id !== "698650459187183672") return; // Teen leader role id

          const embed = new MessageEmbed()
            .setAuthor(`Welcome Teen Leader!`)
            .setDescription(
              `Here is a quick walk-through so that way you can get acquainted! If you have further questions afterwards feel free to reach out and ask David Cole or a Staff member!!\n\n**1.** If you’d like to post and introduce yourselves on the #《teen-leaders that’s where I would start.\n\n**2.** Then if you want to go read #:rotating_light:rules #:pencil:role-list & #:space_invader:staff that should help get you fairly acquainted with the server.\n\n**3.** I would mute the following channels: most of, if not all, clubs, the server maintenance category, #《bot-commands , #《homework-help , and then the archive category.\n\n**4.** As far as the staff Category I would change notifications to “@ mentions only” but I would not mute any of the channels in this category. (change notification settings by right-clicking on a channel)\n\n**5.** As far as the whole Teen leader category I leave that on and I allow all messages.\n\n**6.** Just go through and explore! Look and see the different channels. Also we have a ton of fun emojis!!\n\nIf you have further questions feel free to reach out to David Cole or a Staff member!\n\nLastly, if you are new to discord here is a great summary of how it works.\nhttps://www.youtube.com/watch?v=TJ13BA3-NR4`
            );
          after.user.send({ embeds: [embed] });
        }
      });
    });
  },
};
