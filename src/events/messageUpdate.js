module.exports = {
  async event(client) {
    client.on("messageUpdate", async (old, edit) => {
      const { Filter } = require("../mongo/Mongo");
      const { MessageEmbed } = require("discord.js");
      const channel = edit.client.channels.cache.get(
        process.env.MESSAGE_LOG_ID
      );
      if (edit.channel.id == "770730379077353494") return; // Rules channel

      const args = edit.content.split(/ +/);

      for (let arg of args) {
        if (await Filter.checkWord(arg)) {
          const embed = new MessageEmbed()
            .setAuthor("Word Filtered")
            .setDescription(edit.content)
            .setColor("#FF0000");
          channel.send({ embeds: [embed] });
          edit.delete();
          return;
        }
      }
    });
  },
};
