module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(reaction, user, type) {
    const { MessageEmbed } = require("discord.js");

    const message = reaction.message;
    if (reaction.emoji.name !== "⭐") return;
    if (message.author.id === user.id) return; // You cannot star your own messages
    if (message.author.bot) return; // You cannot star a bots message

    let reactionCount = reaction.users.cache.size;

    const starChannel = message.guild.channels.cache.get(
      process.env.STARBOARD_ID
    );

    const fetchedMessages = await starChannel.messages.fetch({ limit: 100 });
    const stars = fetchedMessages.find(
      (m) =>
        m.embeds[0].footer.text.startsWith("⭐") &&
        m.embeds[0].footer.text.endsWith(message.id)
    );
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(
        stars.embeds[0].footer.text
      );
      const foundStar = stars.embeds[0];
      const image =
        message.attachments.size > 0
          ? await this.extension(reaction, message.attachments.first().url)
          : "";

      let newStarCount = parseInt(star[1]);
      if (type == "add") newStarCount++;
      if (type == "remove") newStarCount--;

      const embed = new MessageEmbed()
        .setColor(foundStar.color)
        .setDescription(`${foundStar.description}`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`⭐ ${newStarCount} | ${message.id}`)
        .setImage(image);

      const starMsg = await starChannel.messages.fetch(stars.id);
      await starMsg.edit({ embeds: [embed] });
    }
    if (!stars) {
      if (reactionCount < process.env.STAR_COUNT) return; // It takes STAR_COUNT to make it on the board

      const image =
        message.attachments.size > 0
          ? await this.extension(reaction, message.attachments.first().url)
          : "";
      if (image === "" && message.cleanContent.length < 1)
        return message.channel.send(
          `${user}, you cannot star an empty message.`
        );
      const embed = new MessageEmbed()
        .setColor(15844367)
        .setDescription(
          message.cleanContent + `\n\n[Link to message](${message.url})`
        )
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp(new Date())
        .setFooter(`⭐ ${reactionCount} | ${message.id}`)
        .setImage(image);
      await starChannel.send({ embeds: [embed] });
    }
  }

  // Here we add the this.extension function to check if there's anything attached to the message.
  extension(reaction, attachment) {
    const imageLink = attachment.split(".");
    const typeOfImage = imageLink[imageLink.length - 1];
    const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return "";
    return attachment;
  }
};
