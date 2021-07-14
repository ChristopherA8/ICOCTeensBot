module.exports = {
  name: "bank",
  permissions: 1,
  category: "currency",
  description: "Get the users bank account balance",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const { doIExist } = require("./doIExist.ts");
    const bankDB = new SQLite("./src/databases/bank.sqlite");
    let ping = msg.mentions.members.first();

    if (ping) {
      if (ping.user.bot)
        return msg.reply("That's a bot <:fr:779746820544397312>");
    }

    await doIExist(msg.author.id, ping);

    if (ping) {
      let them = bankDB.prepare("SELECT * FROM bank WHERE id = ?").get(ping.id);
      const embed = new MessageEmbed()
        .setTitle(`${ping.user.username}'s Account`)
        .addField("Balance", `$${them.money}`)
        .setColor(msg.member.displayColor);

      msg.reply(embed);
      return;
    }

    let person = bankDB
      .prepare("SELECT * FROM bank WHERE id = ?")
      .get(msg.author.id);

    const embed = new MessageEmbed()
      .setTitle(`${msg.author.username}'s Account`)
      .addField("Balance", `$${person.money}`)
      .setColor(msg.member.displayColor);

    msg.reply(embed);
  },
};
