module.exports = {
  embed(
    author,
    authorImage,
    title,
    description,
    fields,
    footer,
    image,
    color,
    thumbnail
  ) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed();

    if (author) embed.setAuthor(author, authorImage ? authorImage : "");
    if (title) embed.setTitle(title);
    if (description) embed.setDescription(description);
    if (fields) {
      for (const field of fields) {
        embed.addField(field.name, field.value, field.inline);
      }
    }
    if (footer) embed.setFooter(footer);
    if (image) embed.setImage(image);
    if (color) embed.setColor(color);
    if (thumbnail) embed.setThumbnail(thumbnail);

    return embed;
  },
};
