module.exports = {
  name: "balance",
  permissions: 1,
  category: "currency",
  description: "Show the users bank and wallet balance",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const { doIExist } = require("./doIExist.ts");
    const bankDB = new SQLite("./src/databases/bank.sqlite");
    const walletDB = new SQLite("./src/databases/currency.sqlite");

    const ping = msg.mentions.members.first();

    await doIExist(msg.author.id, ping);

    if (ping) {
      let bank = bankDB.prepare("SELECT * FROM bank WHERE id = ?").get(ping.id);
      let wallet = walletDB
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(ping.id);

      const embed = new MessageEmbed()
        .setTitle(`${msg.author.username}'s Balance`)
        .addFields(
          { name: "Wallet", value: `$${wallet.money}`, inline: true },
          { name: "Bank", value: `$${bank.money}`, inline: true }
        )
        .setColor(ping.displayColor);

      return msg.reply(embed);
    }

    let bank = bankDB
      .prepare("SELECT * FROM bank WHERE id = ?")
      .get(msg.author.id);
    let wallet = walletDB
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(msg.author.id);

    const embed = new MessageEmbed()
      .setTitle(`${msg.author.username}'s Balance`)
      .addFields(
        { name: "Wallet", value: `$${wallet.money}`, inline: true },
        { name: "Bank", value: `$${bank.money}`, inline: true }
      )
      .setColor(msg.author.displayColor);

    msg.reply(embed);
  },
};
