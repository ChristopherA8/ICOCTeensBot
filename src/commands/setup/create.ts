module.exports = {
  name: "create",
  permissions: 9,
  async execute(msg) {
    const data = {
      name: "help",
      description: "Get list of commands",
    };

    const command = await msg.client.guilds.cache
      .get("698590629344575500")
      ?.commands.create(data);
    console.log(command);
  },
};
