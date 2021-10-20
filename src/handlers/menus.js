module.exports = {
  async menuHandler(interaction, client) {
    if (interaction.customId == "clubs_select") {
      const getChannel = (id) => interaction.guild.channels.cache.get(`${id}`);

      let animeClub = getChannel("762728186714128474");
      var artClub = getChannel("768879621927600189");
      var athleticClub = getChannel("798057555459964938");
      var fashionClub = getChannel("862748480471302144");
      var bookClub = getChannel("771017826559066132");
      var dndClub = getChannel("785613556724531201");
      var foodClub = getChannel("798057687249321994");
      var gamingClub = getChannel("768634091507286046");
      var movieClub = getChannel("780279298509504552");
      var musicClub = getChannel("768939597568147496");
      var natureClub = getChannel("831227653159387248");
      var petCLub = getChannel("818309635232235521");
      var stemClub = getChannel("776921664948273192");
      var travelClub = getChannel("799714906353303662");
      var tradingClub = getChannel("900401266319032340");

      const updateOverwrite = (channel) => {
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
      };

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
          case "trading":
            updateOverwrite(tradingClub);
            break;
          default:
            break;
        }
      }

      interaction.reply({ content: "Changes Applied", ephemeral: true });
    }
  },
};
