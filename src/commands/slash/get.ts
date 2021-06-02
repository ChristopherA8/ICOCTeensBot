module.exports = {
  name: "get",
  permissions: 9,
  async execute(msg) {
    const guild = await msg.client.guilds.cache.get("698590629344575500");
    console.log(JSON.stringify(guild.commands, null, 2));
  },
};
