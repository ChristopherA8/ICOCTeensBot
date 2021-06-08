module.exports = {
  name: "bruh",
  permissions: 9,
  execute(msg) {
    let channel = msg.guild.channels.cache.get("698590629344575503");
    channel.messages
      .fetch({ before: "850578408722137142" })
      .then(async (messages) => {
        messages.forEach(async (message) => {
          const userReactions = message.reactions.cache;
          try {
            for (const reaction of userReactions.values()) {
              // await reaction.users.remove("430213324286722048");
              await reaction.remove();
            }
          } catch (error) {
            console.error("Failed to remove reactions.");
          }
        });
      })
      .catch(console.error);
  },
};
