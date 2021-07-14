module.exports = {
  name: "wallet",
  permissions: 1,
  category: "currency",
  description: "Show the users wallet balance",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const { doIExist } = require("./doIExist.ts");
    const walletDB = new SQLite("./src/databases/currency.sqlite");

    const ping = msg.mentions.members.first();

    await doIExist(msg.author.id, ping);

    if (ping) {
      let wallet = walletDB
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(ping.id);

      const embed = new MessageEmbed()
        .setTitle(`${ping.user.username}'s Wallet`)
        .addFields({ name: "Balance", value: `$${wallet.money}`, inline: true })
        .setColor(ping.displayColor);

      return msg.reply(embed);
    }

    let wallet = walletDB
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(msg.author.id);

    const embed = new MessageEmbed()
      .setTitle(`${msg.author.username}'s Wallet`)
      .addFields({ name: "Balance", value: `$${wallet.money}`, inline: true })
      .setColor(msg.member.displayColor);

    msg.reply(embed);
  },
};
