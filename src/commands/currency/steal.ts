module.exports = {
  name: "steal",
  permissions: 1,
  category: "currency",
  description: "Steal from the poor to give to the poor",
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let ping = msg.mentions.members.first();

    if (!ping) return msg.reply("Ping someone");
    if (ping.user.bot) return msg.reply("Really?");
    if (ping.id == msg.author.id) return msg.reply("Baka");

    let you = sql
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(msg.author.id);
    let person = sql
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(ping.id);

    if (!you) {
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(msg.author.id, 10);
      you = sql
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(msg.author.id);
    }

    if (!person) {
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(ping.id, 10);
      person = sql.prepare("SELECT * FROM currency WHERE id = ?").get(ping.id);
    }

    if (person.money <= 0) return msg.reply("This person is already broke");

    let comment = "";

    let successMessages = [
      "* tripped and dropped his wallet",
      "The wind knocked * off balance and their money went everywhere",
      "You distracted * and took their wallet",
    ];

    let failMessages = [
      "* used solarbeam to evade your attack",
      "* caught you and called the police",
      "* slipped and hit their head",
    ];

    let successMessage =
      successMessages[getRandomInt(0, successMessages.length)];
    let failMessage = failMessages[getRandomInt(0, failMessages.length)];
    successMessage = successMessage.replace("*", ping);
    failMessage = failMessage.replace("*", ping);

    function getRandomInt(min, max) {
      //The maximum is exclusive and the minimum is inclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // This determines whether you win or lose
    let result = getRandomArbitrary(0, 2);
    result = Math.floor(result);

    // This determines how much you win or lose
    let amount = 0;
    let howMuchYouStole = getRandomInt(1, person.money);
    let howMuchYouLost = getRandomInt(1, you.money);

    if (result > 0) {
      comment = "You Won";

      // Take their money and give it to you
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(msg.author.id, howMuchYouStole + you.money);
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(ping.id, person.money - howMuchYouStole);
    } else {
      comment = "You Lost";

      // Take your money and give it to them
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(ping.id, howMuchYouLost + person.money);
      sql
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(msg.author.id, you.money - howMuchYouLost);
    }

    const embed = new MessageEmbed()
      .setTitle(comment)
      .setDescription(
        `${result > 0 ? successMessage : failMessage}\n ${
          result > 0
            ? `You stole $${howMuchYouStole}`
            : `You lost $${howMuchYouLost}`
        }`
      )
      .setColor(msg.member.displayColor);

    msg.reply(embed);
  },
};
