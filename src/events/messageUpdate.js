module.exports = {
  async event(client) {
    client.on("messageUpdate", async (old, edit) => {
      const { Filter } = require("../mongo/Mongo");
      const { MessageEmbed } = require("discord.js");
      const channel = edit.client.channels.cache.get(
        process.env.MESSAGE_LOG_ID
      );
      if (edit.channel.id == "770730379077353494") return; // Rules channel

      if (await Filter.checkMessage(edit)) {
        const embed = new MessageEmbed()
          .setAuthor("Word Filtered")
          .setDescription(edit.content)
          .setColor("#FF0000");
        channel.send({ embeds: [embed] });

        const dmEmbed = new MessageEmbed()
          .setAuthor("Word Filtered")
          .setDescription(
            `Your message was deleted because it contained the filtered word \`${await Filter.findWordInMessage(
              edit
            )}\``
          )
          .setColor("#FF0000");
        edit.author.send({ embeds: [dmEmbed] });
        edit.delete();
      }
    });
  },
};
