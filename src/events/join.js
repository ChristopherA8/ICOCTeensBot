module.exports = {
  event(client) {
    client.on("guildMemberAdd", (join) => {
      const { MessageEmbed } = require("discord.js");
      if (join.guild.id !== `698590629344575500`) return;
      const channel = join.guild.channels.cache.get(`698591277205422171`);
      channel.send(`Welcome <@${join.id}> to ICOC Teens!`);
      const welcomeEmbed = new MessageEmbed()
        .setTitle(`Welcome to the ICOC Teens Server`)
        .setDescription(
          `Thanks for joining the ICOC Teens Server. To gain access to the server please fill out this google form. It helps us keep track of who joins, so we can keep the server a safe place for everyone.\nForm Link: <https://docs.google.com/forms/d/e/1FAIpQLSfatFjGGgYmdMjsPFZKM-KX8zEuWvlKi76KX8XNceGTbEiMlw/viewform>\nIf you have any issue or questions regarding the form, don't hesitate to DM a staff member for assistance.`
        )
        .setColor("#47a8e8");
      join.send({ embeds: [welcomeEmbed] });
    });
  },
};
