module.exports = {
  async listen(msg) {
    if (msg.channel.id !== "768931736414584902") return; // TESTING

    const { MessageEmbed } = require("discord.js");
    const channel = msg.client.channels.cache.get(process.env.MESSAGE_LOG_ID);
    if (msg.channel.id == "770730379077353494") return; // Rules channel

    const { Filter } = require("../mongo/Mongo");
    const words = await Filter.getWords();

    const args = msg.content.split(/ +/);

    for (let arg of args) {
      if (await Filter.checkWord(arg)) {
        const embed = new MessageEmbed()
          .setAuthor("Word Filtered")
          .setDescription(msg.content)
          .setColor("#FF0000");
        channel.send({ embeds: [embed] });
        msg.delete();
        return;
      }
      // for (const word of words[0].words) {
      //   if (arg.toLowerCase() == word.toLowerCase()) {
      //     const embed = new MessageEmbed()
      //       .setAuthor("Word Filtered")
      //       .setDescription(msg.content)
      //       .setColor("#FF0000");
      //     channel.send({ embeds: [embed] });
      //     msg.delete();
      //   }
      // }
    }
  },
};
