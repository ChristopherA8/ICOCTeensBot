module.exports = {
  listen(msg) {
    const spam = require("../helpers/spamDetection.js");
    const { Permissions } = require("discord.js");
    const muteRole = msg.member.guild.roles.cache.get("759587936429277214");

    spam.log(msg, 50);

    if (spam.tooQuick(4, 1000)) {
      // if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
      msg.member.roles.add(muteRole, "Spam");
      console.log("tooQuick");
    }

    if (spam.sameMessages(4, 10000)) {
      // if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
      msg.member.roles.add(muteRole, "Spam");
      console.log("sameMessages");
    }
  },
};
