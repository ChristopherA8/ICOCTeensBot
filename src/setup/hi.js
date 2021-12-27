module.exports = {
  setup(client) {
    const guild = client.guilds.cache.get("698590629344575500");
    const channel = guild.channels.cache.get("768843277406568499");
    // channel.send(
    //   "https://cdn.discordapp.com/emojis/665980185186795540.gif?size=96"
    // );
    // channel.messages
    //   .fetch("924482354561568808")
    //   .then((message) => {
    //     message.reply("POG");
    //   })
    //   .catch(console.error);
  },
};
