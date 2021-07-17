module.exports = {
  name: "clubmembers",
  permissions: 1,
  execute(msg) {
    let clubsCategory = msg.guild.channels.cache.get("768878986280829019"); // Clubs category
    let clubs = clubsCategory.children.filter(
      (club) => club.id !== `798032803928342549`
    ); // Club channels minus #club-list
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed().setAuthor("Club Members");
    clubs.forEach((club) => {
      embed.addField(
        club.name,
        `\`Members: ${club.permissionOverwrites.size}\``,
        true
      );
    });
    msg.channel.send(embed);
  },
};
