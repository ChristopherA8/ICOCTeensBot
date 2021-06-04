module.exports = {
  name: "unmute",
  category: "moderation",
  description: "Unmute a member",
  permission: 5,
  execute(msg, args) {
    const { Permissions, MessageEmbed } = require("discord.js");
    const muteRole = msg.member.guild.roles.cache.get("759587936429277214");

    let person = msg.mentions.members.first();
    let reason;
    if (args.length > 1) {
      reason = args;
      reason.shift();
      reason = reason.join(" ");
    }

    if (!person) {
      msg.reply(`Ping someone to unmute`);
    } else if (person.id == msg.author.id) {
      msg.reply(`baka`);
    } else if (reason) {
      person.roles.remove(muteRole, { reason: reason });
      const muteEmbed = new MessageEmbed()
        .setTitle("Unmuted")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      msg.reply(muteEmbed).then((message) => {
        setTimeout(() => {
          message.delete();
        }, 8000);
      });
    } else {
      person.roles.remove(muteRole);
      msg.reply(`Unmuted <@${person.id}>`);
    }
  },
};
