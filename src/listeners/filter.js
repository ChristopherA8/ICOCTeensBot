module.exports = {
  async listen(msg) {
    const { Filter } = require("../mongo/Mongo");
    const { MessageEmbed } = require("discord.js");
    const channel = msg.client.channels.cache.get(process.env.MESSAGE_LOG_ID);
    if (msg.channel.id == "770730379077353494") return; // Rules channel

    if (await Filter.checkMessage(msg)) {
      const embed = new MessageEmbed()
        .setAuthor("Word Filtered")
        .setDescription(msg.content)
        .setColor("#FF0000");
      channel.send({ embeds: [embed] });

      const dmEmbed = new MessageEmbed()
        .setAuthor("Word Filtered")
        .setDescription(
          `Your message was deleted because it contained the filtered word \`${await Filter.findWordInMessage(
            msg
          )}\``
        )
        .setColor("#FF0000");
      msg.author.send({ embeds: [dmEmbed] });
      msg.delete();
    }
  },
};
