module.exports = {
  name: "balance",
  permissions: 1,
  execute(msg, args) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let person = sql
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(msg.author.id);

    if (!person) {
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(msg.author.id, 10);

      person = sql
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(msg.author.id);
    }

    const embed = new MessageEmbed()
      .setTitle(`${msg.author.username}'s Wallet`)
      .addField("Balance", `$${person.money}`)
      .setColor(msg.member.displayColor);

    msg.reply(embed);
  },
};
