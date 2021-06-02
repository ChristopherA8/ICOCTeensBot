module.exports = {
  setup(client) {
    const { Collection } = require("discord.js");
    const fs = require("fs");

    // Add slash commands to collection
    client.slashCommands = new Collection();
    try {
      const files = fs
        .readdirSync(`./src/slash/`)
        .filter((file) => file.endsWith(".ts"));
      for (const file of files) {
        const command = require(`../slash/${file}`);
        client.slashCommands.set(command.name, command);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
