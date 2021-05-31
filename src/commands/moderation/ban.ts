module.exports = {
  name: "ban",
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
      msg.reply(`Ping someone to ban`);
    } else if (person.id == msg.author.id) {
      msg.reply(`baka`);
    } else if (person.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      msg.reply(`Don't ban an admin`);
    } else if (reason) {
      person.ban({ reason: reason });
      const banEmbed = new MessageEmbed()
        .setTitle("Banned")
        .addFields(
          { name: "User", value: `<@${person.id}>` },
          { name: "Reason", value: reason }
        );
      // ban gif https://tenor.com/view/anime-mad-ban-punch-gif-17117340
      msg.reply(banEmbed);
    } else {
      person.ban();
      msg.reply(`Banned <@${person.id}>`);
    }
  },
};
