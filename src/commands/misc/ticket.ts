module.exports = {
  name: "ticket",
  category: "misc",
  description: "Send a message to <#698594785803501629>",
  permissions: 1,
  async execute(msg, args) {
    const { MessageEmbed } = require("discord.js");
    const channel = msg.guild.channels.cache.get("768931736414584902");
    let ticket = args.join(" ");
    if (!ticket) {
      msg.reply(`Missing message`);
      return;
    }

    const embed = new MessageEmbed()
      .setAuthor("Ticket", "https://chr1s.dev/assets/mailbox.png")
      .setDescription(ticket.substr(0, 1900))
      .setFooter(`From ${msg.author.tag}`)
      .setColor("#47a8e8");
    channel.send(embed);

    await msg.reply("Message Sent 📪");
    msg.delete();
  },
};
