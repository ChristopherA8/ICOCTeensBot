module.exports = {
  async listen(msg) {
    if (msg.author.bot) return;
    if (msg.channel.id == "770730379077353494") return; // Rules channel

    const { Points } = require("../mongo/Mongo");
    let person = await Points.getPerson(msg.author.id);
    person = person[0];

    if (!person) {
      person = {
        id: `${msg.guild.id}-${msg.author.id}`,
        user: msg.author.id,
        guild: msg.guild.id,
        points: 0,
        level: 1,
        name: msg.author.tag,
      };
      await Points.addPerson(person);
    }

    person = await Points.getPerson(msg.author.id);
    person = person[0];

    setTimeout(async () => {
      let words = msg.content.split(/ +/);
      let wordsCount = words.length;
      if (wordsCount <= 25) {
        person.points += wordsCount;
      } else {
        person.points += 25;
      }
      await Points.updatePerson(person);
    }, 6000);

    const curLevel = Math.floor(0.3 * Math.sqrt(person.points));

    if (
      person.level < curLevel &&
      msg.channel.id !== "698594785803501629" && // staff chat
      msg.channel.id !== "818309077431746592" && // comm announcements
      msg.channel.id !== "698590945993555998" && // announcements
      msg.channel.id !== "769966706667290634" && // events
      msg.channel.id !== "698592596515225662" // Prayer Requests
    ) {
      person.level++;
      msg.reply(`You've leveled up to level **${curLevel}**!`);
    }
    await Points.updatePerson(person);
  },
};
