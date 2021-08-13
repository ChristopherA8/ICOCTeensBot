module.exports = {
  async setup(client) {
    const guild = client.guilds.cache.get(`698590629344575500`);
    const channel = guild.channels.cache.get("798032803928342549");
    const message = await channel.messages.fetch(`862750053907038219`);

    const animefilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `⛩️`;
    const artfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🎨`;
    const athleticsfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `🏃‍♂️`;
    const fashionfilter = (reaction, user) =>
      user.id !== `761792910088994816` && reaction.emoji.name == `👗`;
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
    const fashioncollector = message.createReactionCollector(fashionfilter);
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
        !animeClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        animeClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        animeClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    artcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var artClub = guild.channels.cache.get("768879621927600189");
      if (
        !artClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        artClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        artClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    athleticcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var athleticClub = guild.channels.cache.get("798057555459964938");
      if (
        !athleticClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        athleticClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        athleticClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    fashioncollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var fashionClub = guild.channels.cache.get("862748480471302144");
      if (
        !fashionClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        fashionClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        fashionClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    bookcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var bookClub = guild.channels.cache.get("771017826559066132");
      if (
        !bookClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        bookClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        bookClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    dndcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var dndClub = guild.channels.cache.get("785613556724531201");
      if (
        !dndClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        dndClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        dndClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    foodcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var foodClub = guild.channels.cache.get("798057687249321994");
      if (
        !foodClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        foodClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        foodClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    gamingcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var gamingClub = guild.channels.cache.get("768634091507286046");
      if (
        !gamingClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        gamingClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        gamingClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    tvcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var tvClub = guild.channels.cache.get("780279298509504552");
      if (
        !tvClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        tvClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        tvClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    musiccollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var musicClub = guild.channels.cache.get("768939597568147496");
      if (
        !musicClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        musicClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        musicClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    petcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("818309635232235521");
      if (
        !stemClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    stemcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("776921664948273192");
      if (
        !stemClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    travelcollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var stemClub = guild.channels.cache.get("799714906353303662");
      if (
        !stemClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        stemClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        stemClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
    naturecollector.on("collect", async (r, user) => {
      r.users.remove(user.id);
      var reactionMember = message.guild.members.cache.get(user.id);
      var natureClub = guild.channels.cache.get("831227653159387248");
      if (
        !natureClub.permissionOverwrites.cache.find(
          (mem) => mem.id == reactionMember.id
        )
      ) {
        natureClub.permissionOverwrites
          .edit(reactionMember, {
            VIEW_CHANNEL: true,
          })
          .catch(console.error);
      } else {
        natureClub.permissionOverwrites.cache.get(reactionMember.id).delete();
      }
    });
  },
};
