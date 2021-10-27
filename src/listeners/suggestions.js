module.exports = {
  listen(msg) {
    const { MessageEmbed } = require("discord.js");

    if (msg.channel.id !== "803446581222309888") return;
    msg.delete();

    let suggestions = msg.guild.channels.cache.get("803323220853915679");
    let time = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");

    const embed = new MessageEmbed()
      .setAuthor("Suggestion", "https://chr1s.dev/assets/mailbox.png")
      .setColor(Math.floor(Math.random() * 16777215).toString(16))
      .setDescription(`${msg}`)
      .setFooter(`From: ${msg.author.tag}  |  Time: ${time}`);
    suggestions.send({ embeds: [embed] }).then((message) => {
      message.react(`✅`);
      message.react(`❌`);
      message.react(`❔`);
      message.react("<:uhh:761257817562415164>");

      const filter = (reaction, user) =>
        reaction.emoji.name === "✅" && user.bot == false;

      const collector = message.createReactionCollector({
        filter,
        maxUsers: 3,
      });

      collector.on("collect", (reaction, user) => {});

      collector.on("end", (collected) => {
        let channel = message.guild.channels.cache.get("837126068564525106");
        channel.send({ embeds: [message.embeds[0]] });
      });
    });
  },
};
