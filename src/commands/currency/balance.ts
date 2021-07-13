module.exports = {
  name: "balance",
  permissions: 1,
  category: "currency",
  description: "Show the users balance",
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let ping = msg.mentions.members.first();

    if (ping) {
      let them = sql
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(ping.id);

      if (!them) {
        sql
          .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
          .run(ping.id, 10);

        them = sql.prepare("SELECT * FROM currency WHERE id = ?").get(ping.id);
      }

      const embed = new MessageEmbed()
        .setTitle(`${ping.user.username}'s Wallet`)
        .addField("Balance", `$${them.money}`)
        .setColor(msg.member.displayColor);

      msg.reply(embed);
      return;
    }

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
