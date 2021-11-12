module.exports = {
  name: "help",
  execute(interaction) {
    const { MessageEmbed } = require("discord.js");
    let categories = ["info", "xp", "misc", "moderation", "voice", "currency"];
    let info, xp, misc, moderation, voice, currency;

    for (const category of categories) {
      switch (category) {
        case "info":
          info = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        case "xp":
          xp = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        case "misc":
          misc = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        case "moderation":
          moderation = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        case "voice":
          voice = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        case "currency":
          currency = interaction.client.commands.filter(
            (command) => command.category == category
          );
          break;
        default:
          break;
      }
    }
    let page = 1;
    const embed = new MessageEmbed()
      .setTitle("Info")
      .setColor("#47a8e8")
      .setFooter(
        `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
      );
    for (const command of info) {
      let com = command[1];
      embed.addField(
        com.name,
        com.description ? com.description : "No Description",
        true
      );
    }
    interaction.reply({ embeds: [embed] });
    interaction.fetchReply().then((message) => {
      message.react("◀");
      message.react("▶");
      const filter = (reaction, user) => {
        return (
          (reaction.emoji.name === "◀" || reaction.emoji.name === "▶") &&
          user.bot !== true
        );
      };
      const reactionCollector = message.createReactionCollector({
        filter,
        time: 100000,
      });
      reactionCollector.on("collect", async (reaction, user) => {
        await reaction.users.remove(user.id);

        if (reaction.emoji.name === "◀" && page > 1) page--;
        if (reaction.emoji.name === "▶" && page < 6) page++;
        embed.fields = [];

        switch (page) {
          case 1:
            embed.setTitle("Info");
            for (const command of info) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          case 2:
            embed.setTitle("Misc");
            for (const command of misc) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          case 3:
            embed.setTitle("XP");
            for (const command of xp) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          case 4:
            embed.setTitle("Moderation");
            for (const command of moderation) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          case 5:
            embed.setTitle("Voice");
            for (const command of voice) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          case 6:
            embed.setTitle("Currency");
            for (const command of currency) {
              let com = command[1];
              embed
                .addField(
                  com.name,
                  com.description ? com.description : "No Description",
                  true
                )
                .setFooter(
                  `Page ${page}/6  |  Total Commands ${interaction.client.commands.size}`
                );
            }
            break;
          default:
            break;
        }
        message.edit({ embeds: [embed] });
      });
    });
  },
};
