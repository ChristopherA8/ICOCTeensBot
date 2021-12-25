module.exports = {
  setup(client) {
    const guild = client.guilds.cache.get("698590629344575500");
    const channel = guild.channels.cache.get("698590629344575503");
    // channel.send(
    //   "https://cdn.discordapp.com/emojis/665980185186795540.gif?size=96"
    // );
    // channel.messages
    //   .fetch("924105197767249950")
    //   .then((message) => {
    //     message.reply("🤨");
    //   })
    //   .catch(console.error);
  },
};
