module.exports = {
  name: "steal",
  permissions: 9,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let ping = msg.mentions.members.first();

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

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    if (!ping) return msg.reply("Ping someone");

    let comment = "";

    let successMessages = [
      "* tripped and dropped his wallet",
      "The wind knocked * off balance and their money went everywhere",
    ];

    let failMessages = [
      "* used solarbeam to evade your attack",
      "* caught you and called the police",
    ];

    let successMessage =
      successMessages[getRandomInt(0, successMessages.length)];
    let failMessage = failMessages[getRandomInt(0, failMessages.length)];
    successMessage = successMessage.replace("*", ping);
    failMessage = failMessage.replace("*", ping);

    let result = getRandomArbitrary(0, 2);
    result = Math.floor(result);

    let amount = getRandomInt(0, 51);

    if (result > 0) {
      comment = "You Won";
    } else {
      comment = "You Lost";
    }

    const embed = new MessageEmbed()
      .setTitle(comment)
      .setDescription(
        `${result > 0 ? successMessage : failMessage}\n ${
          result > 0 ? `You stole ${amount}` : `You lost ${amount}`
        }`
      )
      .setColor(msg.member.displayColor);

    msg.reply(embed);

    // const embed = new MessageEmbed()
    //   .setTitle(`${msg.author.username}'s Wallet`)
    //   .addField("Balance", `$${person.money}`)
    //   .setColor(msg.member.displayColor);

    // msg.reply(embed);
  },
};
