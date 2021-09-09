module.exports = {
  listen(msg) {
    if (msg.author.bot) return;
    if (msg.channel.id == "770730379077353494") return;

    let score = msg.client.getScore.get(msg.author.id, "698590629344575500");
    if (!score) {
      score = {
        id: `${msg.guild.id}-${msg.author.id}`,
        user: msg.author.id,
        guild: msg.guild.id,
        points: 0,
        level: 1,
        name: msg.author.tag,
      };
    }
    if (!score.name) {
      score.name = msg.author.tag;
    }
    setTimeout(() => {
      let words = msg.content.split(/ +/);
      let wordsCount = words.length;
      if (wordsCount <= 25) {
        score.points += wordsCount;
      } else {
        score.points += 25;
      }
      msg.client.setScore.run(score);
    }, 6000);

    const curLevel = Math.floor(0.3 * Math.sqrt(score.points));
    if (
      score.level < curLevel &&
      msg.channel.id !== "698594785803501629" && // staff chat
      msg.channel.id !== "818309077431746592" && // comm announcements
      msg.channel.id !== "698590945993555998" && // announcements
      msg.channel.id !== "769966706667290634" // events
    ) {
      score.level++;
      msg.reply(`You've leveled up to level **${curLevel}**!`);
    }
    msg.client.setScore.run(score);
  },
};
