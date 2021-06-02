module.exports = {
  async setup(client) {
    const guild = client.guilds.cache.get(`698590629344575500`);
    const channel = guild.channels.cache.get("798032803928342549");
    const message = await channel.messages.fetch(`832029100746604591`);

    const animefilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `⛩️`;
    const artfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🎨`;
    const athleticsfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🏃‍♂️`;
    const bookfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `📚`;
    const dndfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🎲`;
    const foodfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🍜`;
    const gamingfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🎮`;
    const tvfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `📺`;
    const musicfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🎼`;
    const petfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🐈`;
    const stemfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🔨`;
    const travelfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🧳`;
    const natureFilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🌳`;

    const animecollector = message.createReactionCollector(animefilter);
    const artcollector = message.createReactionCollector(artfilter);
    const athleticcollector = message.createReactionCollector(athleticsfilter);
    const bookcollector = message.createReactionCollector(bookfilter);
    const dndcollector = message.createReactionCollector(dndfilter);
    const foodcollector = message.createReactionCollector(foodfilter);
    const gamingcollector = message.createReactionCollector(gamingfilter);
    const tvcollector = message.createReactionCollector(tvfilter);
    const musiccollector = message.createReactionCollector(musicfilter);
    const petcollector = message.createReactionCollector(petfilter);
    const stemcollector = message.createReactionCollector(stemfilter);
    const travelcollector = message.createReactionCollector(travelfilter);
    const naturecollector = message.createReactionCollector(natureFilter);

    animecollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var animeClub = guild.channels.cache.get("762728186714128474");
      if (
        !animeClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        animeClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        animeClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    artcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var artClub = guild.channels.cache.get("768879621927600189");
      if (
        !artClub.permissionOverwrites.find((mem) => mem.id == reactionMember.id)
      ) {
        artClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        artClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    athleticcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var athleticClub = guild.channels.cache.get("798057555459964938");
      if (
        !athleticClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        athleticClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        athleticClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    bookcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var bookClub = guild.channels.cache.get("771017826559066132");
      if (
        !bookClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        bookClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        bookClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    dndcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var dndClub = guild.channels.cache.get("785613556724531201");
      if (
        !dndClub.permissionOverwrites.find((mem) => mem.id == reactionMember.id)
      ) {
        dndClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        dndClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    foodcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var foodClub = guild.channels.cache.get("798057687249321994");
      if (
        !foodClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        foodClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        foodClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    gamingcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var gamingClub = guild.channels.cache.get("768634091507286046");
      if (
        !gamingClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        gamingClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        gamingClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    tvcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var tvClub = guild.channels.cache.get("780279298509504552");
      if (
        !tvClub.permissionOverwrites.find((mem) => mem.id == reactionMember.id)
      ) {
        tvClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        tvClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    musiccollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var musicClub = guild.channels.cache.get("768939597568147496");
      if (
        !musicClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        musicClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        musicClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    petcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("818309635232235521");
      if (
        !stemClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    stemcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("776921664948273192");
      if (
        !stemClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    travelcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("799714906353303662");
      if (
        !stemClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
    naturecollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var natureClub = guild.channels.cache.get("831227653159387248");
      if (
        !natureClub.permissionOverwrites.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        natureClub
          .updateOverwrite(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        natureClub.permissionOverwrites.get(reactionMember.id).delete();
      }
    });
  },
};
