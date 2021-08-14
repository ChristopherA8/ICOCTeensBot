module.exports = {
  menuHandler(interaction, client) {
    if (interaction.customId == "clubs_select") {
      let animeClub =
        interaction.guild.channels.cache.get("762728186714128474");
      var artClub = interaction.guild.channels.cache.get("768879621927600189");
      var athleticClub =
        interaction.guild.channels.cache.get("798057555459964938");
      var fashionClub =
        interaction.guild.channels.cache.get("862748480471302144");
      var bookClub = interaction.guild.channels.cache.get("771017826559066132");
      var dndClub = interaction.guild.channels.cache.get("785613556724531201");
      var foodClub = interaction.guild.channels.cache.get("798057687249321994");
      var gamingClub =
        interaction.guild.channels.cache.get("768634091507286046");
      var movieClub =
        interaction.guild.channels.cache.get("780279298509504552");
      var musicClub =
        interaction.guild.channels.cache.get("768939597568147496");
      var natureClub =
        interaction.guild.channels.cache.get("831227653159387248");
      var petCLub = interaction.guild.channels.cache.get("818309635232235521");
      var stemClub = interaction.guild.channels.cache.get("776921664948273192");
      var travelClub =
        interaction.guild.channels.cache.get("799714906353303662");

      function updateOverwrite(channel) {
        if (
          !channel.permissionOverwrites.cache.find(
            (mem) => mem.id == interaction.member.id
          )
        ) {
          channel.permissionOverwrites
            .edit(interaction.member, {
              VIEW_CHANNEL: true,
            })
            .catch(console.error);
        } else {
          channel.permissionOverwrites.cache
            .get(interaction.member.id)
            .delete();
        }
      }

      for (const value of interaction.values) {
        switch (value) {
          case "anime":
            updateOverwrite(animeClub);
            break;
          case "art":
            updateOverwrite(artClub);
            break;
          case "athletics":
            updateOverwrite(athleticClub);
            break;
          case "fashion":
            updateOverwrite(fashionClub);
            break;
          case "book":
            updateOverwrite(bookClub);
            break;
          case "dnd":
            updateOverwrite(dndClub);
            break;
          case "food":
            updateOverwrite(foodClub);
            break;
          case "gaming":
            updateOverwrite(gamingClub);
            break;
          case "movie":
            updateOverwrite(movieClub);
            break;
          case "music":
            updateOverwrite(musicClub);
            break;
          case "nature":
            updateOverwrite(natureClub);
            break;
          case "pet":
            updateOverwrite(petCLub);
            break;
          case "stem":
            updateOverwrite(stemClub);
            break;
          case "travel":
            updateOverwrite(travelClub);
            break;
          default:
            break;
        }
      }

      interaction.reply({ content: "Changes Applied", ephemeral: true });
    }
  },
};
