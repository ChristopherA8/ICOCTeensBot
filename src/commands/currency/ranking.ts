module.exports = {
  name: "ranking",
  permissions: 1,
  category: "currency",
  description: "Get wealth leaderboard",
  async execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let people = sql
      .prepare("SELECT * FROM currency ORDER BY money DESC LIMIT 5")
      .all();

    const embed = new MessageEmbed().setTitle("Ranking").setColor("#47a8e8");

    async function getMember(id) {
      return await msg.guild.members.cache.get(id);
    }
    let i = 1;
    for (let person of people) {
      let member = await getMember(person.id);
      embed.addField(`#${i} ${member.displayName}`, `$${person.money}`, false);
      i++;
    }

    msg.reply(embed);
  },
};
