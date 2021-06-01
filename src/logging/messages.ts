module.exports = {
  log(client) {
    const MESSAGE_LOG_ID = "768882922379280464";
    const { embed } = require("../helpers/embed.ts");

    client.on("messageDelete", (message) => {
      if (message.guild.id !== "698590629344575500") return;
      if (message.author.bot || message.channel.type == "dm") return;
      const channel = message.guild.channels.cache.get(MESSAGE_LOG_ID);
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      channel.send(
        embed(
          "Message Deleted",
          null,
          null,
          `${message.content.substring(0, 1900)}\n\nAuthor  ${
            message.author.tag
          }`,
          null,
          null,
          null,
          "#47a8e8",
          null
        )
      );
    });

    client.on("messageDeleteBulk", (messages) => {
      const channel = messages.first().guild.channels.cache.get(MESSAGE_LOG_ID);
      let messagesArray = [];
      messages.map((message) => {
        messagesArray.push(message.content);
      });
      messagesArray = messagesArray.reverse();
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      channel.send(
        embed(
          "Messages Deleted",
          null,
          null,
          `${messagesArray.join("\n").substring(0, 1900)}`,
          null,
          null,
          null,
          "#47a8e8",
          null
        )
      );
    });

    client.on("messageUpdate", (before, after) => {
      if (before.author.bot || before.channel.type == "dm") return;
      if (before.guild.id !== `698590629344575500`) return;

      const channel = before.guild.channels.cache.get(MESSAGE_LOG_ID);

      if (before.content !== after.content) {
        channel.send(
          embed(
            "Message Edited",
            null,
            null,
            `Author  ${before.author.tag}`,
            [
              { name: "Before", value: before.content.substring(0, 1900) },
              { name: "After", value: after.content.substring(0, 1900) },
            ],
            null,
            null,
            "#47a8e8",
            null
          )
        );
      }
    });
  },
};
