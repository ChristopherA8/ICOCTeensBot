module.exports = {
  name: "birthdays",
  category: "info",
  permissions: 1,
  execute(msg) {
    const fs = require("fs");
    const { MessageEmbed } = require("discord.js");
    let data = fs.readFileSync("./src/databases/birthdays.json");
    let birthdays = JSON.parse(data);

    function getMember(id) {
      return msg.guild.members.cache.get(id);
    }

    const embed = new MessageEmbed().setAuthor("Birthdays").setColor("#47a8e8");

    for (const person of birthdays) {
      let member = getMember(person.id);
      embed.addField(member.user.tag, person.date);
    }
    msg.reply(embed);
  },
};
