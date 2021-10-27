module.exports = {
  name: "ranking",
  permissions: 1,
  category: "currency",
  description: "Wealth ranking",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let people = sql
      .prepare("SELECT * FROM currency ORDER BY money DESC LIMIT 5")
      .all();

    const embed = new MessageEmbed().setTitle("Ranking").setColor("#47a8e8");

    let i = 1;
    for (let person of people) {
      let member = await msg.guild.members.cache.find(
        (mem) => mem.user.id == person.id
      );

      embed.addField(
        `#${i} ${member ? member.username : "No data"}`,
        `$${person.money ? person.money : "No Data"}`,
        false
      );
      i++;
    }

    msg.reply({ embeds: [embed] });
  },
};
