module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick a member",
  permissions: 5,
  execute(msg, args) {
    const { Permissions, MessageEmbed } = require("discord.js");
    let person = msg.mentions.members.first();
    let reason;
    if (args.length > 1) {
      reason = args;
      reason.shift();
      reason = reason.join(" ");
    }

    if (!person) {
      msg.reply(`Ping someone to kick`);
    } else if (person.id == msg.author.id) {
      msg.reply(`baka`);
    } else if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      msg.reply(`Don't kick an admin`);
    } else if (reason) {
      person.kick(reason);
      const kickEmbed = new MessageEmbed()
        .setTitle("Kicked")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      msg.reply({ embeds: [kickEmbed] }).then((message) => {
        setTimeout(() => {
          message.delete();
        }, 8000);
      });
    } else {
      person.kick();
      msg.reply(`Kicked <@${person.id}>`);
    }
  },
};
