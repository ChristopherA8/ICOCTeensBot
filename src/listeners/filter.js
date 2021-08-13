module.exports = {
  listen(msg) {
    if (msg.channel.id == `770730379077353494`) return;
    const { MessageEmbed } = require("discord.js");
    const { words } = require(`../../wordFilter.json`);
    const channel = msg.client.channels.cache.get("768882922379280464");
    const args = msg.content.split(/ +/);

    for (let arg of args) {
      for (const word of words) {
        if (arg.toLowerCase() == word.toLowerCase()) {
          const embed = new MessageEmbed()
            .setAuthor("Word Filtered")
            .setDescription(msg.content)
            .setColor("#FF0000");
          channel.send(embed);
          msg.delete();
        }
      }
    }
  },
};
