module.exports = {
  name: "mute",
  category: "moderation",
  description: "Mute a member",
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
      msg.reply(`Ping someone to mute`);
    } else if (person.id == msg.author.id) {
      msg.reply(`baka`);
    } else if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      msg.reply(`Don't mute an admin`);
    } else if (reason) {
      person.roles.add(muteRole, { reason: reason });
      const muteEmbed = new MessageEmbed()
        .setTitle("Muted")
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
      person.roles.add(muteRole);
      msg.reply(`Muted <@${person.id}>`);
    }
  },
};
