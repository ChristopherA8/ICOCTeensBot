module.exports = {
  listen(msg) {
    const spam = require("../helpers/spamDetection.js");
    const { Permissions } = require("discord.js");
    const muteRole = msg.member.guild.roles.cache.get("759587936429277214");

    spam.log(msg, 50);

    if (spam.tooQuick(4, 2000)) {
      if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
      msg.member.roles.add(muteRole, "Spam");
    }

    if (spam.sameMessages(8, 30000)) {
      if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
      msg.member.roles.add(muteRole, "Spam");
    }
  },
};
