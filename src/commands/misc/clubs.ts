module.exports = {
  name: "clubs",
  category: "misc",
  permissions: 9,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setAuthor("React to join a club")
      .setDescription(
        "> ⛩️ - Anime Club\n> \n> 🎨 - Art Club\n> \n> 🏃‍♂️ - Athletics Club\n> \n> 📚 - Book Club\n> \n> 🎲 - D&D Club\n> \n> 🍜 - Food Club\n> \n> 🎮 - Gaming Club\n> \n> 📺 - Movie/TV Club\n> \n> 🎼 - Music Club\n> \n> 🐈 - Pet Club\n> \n> 🔨 - STEM Club\n> \n> 🧳 - Travel Club\n> \n> 🌳 - Nature Club\n\n**React again to leave a club**"
      );
    msg.channel.send(embed).then((msg) => {
      msg.react("⛩️");
      msg.react("🎨");
      msg.react("🏃‍♂️");
      msg.react("📚");
      msg.react("🎲");
      msg.react("🍜");
      msg.react("🎮");
      msg.react("📺");
      msg.react("🎼");
      msg.react("🐈");
      msg.react("🔨");
      msg.react("🧳");
      msg.react("🌳");
    });
  },
};
