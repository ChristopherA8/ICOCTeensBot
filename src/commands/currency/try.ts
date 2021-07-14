module.exports = {
  name: "try",
  permissions: 1,
  category: "currency",
  description:
    "Slot Machine style game that ~~doesn't hurt as much as a real one~~ it definitely hurts, I need to fix it",
  execute(msg, args) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let person = sql
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(msg.author.id);

    // Check if person exists in db
    if (!person) {
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(msg.author.id, 10);

      person = sql
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(msg.author.id);
    }

    if (person.money <= 0) return msg.reply("Get some money first to *try*");
    if (!args[0]) return msg.reply("Enter a value to *try*");
    if (Number.isNaN(Number(args[0]))) return msg.reply("That's not a number");
    if (Number(args[0]) <= 0) return msg.reply("Invalid amount");
    if (Number(args[0]) > person.money)
      return msg.reply(
        `You don't have that much\nCurrent Balance: ${person.money}`
      );

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    let multiplier = getRandomArbitrary(0, 2);
    let result = multiplier * Number(args[0]);
    result = Math.floor(result);
    let howMuchYouGet = result - Number(args[0]);

    let comment = "";
    if (howMuchYouGet > 0) {
      comment = "You Won";
    } else if (howMuchYouGet < 0) {
      comment = "You Lost";
    } else {
      comment = "Nothing Happened";
    }

    const embed = new MessageEmbed()
      .setTitle(`${comment}`)
      .addFields(
        { name: "Result", value: `${result}`, inline: true },
        { name: "You Get", value: `${howMuchYouGet}`, inline: true }
      )
      .setColor(msg.member.displayColor);

    msg.reply(embed);

    sql
      .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?)")
      .run(msg.author.id, howMuchYouGet + person.money);
  },
};
