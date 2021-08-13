module.exports = {
  setup(client) {
    const { Collection } = require("discord.js");
    const fs = require("fs");

    // Add slash commands to Collection
    client.slash = new Collection();

    try {
      const folders = fs.readdirSync("./src/commands/slashCommands");
      for (const folder of folders) {
        const files = fs
          .readdirSync(`./src/commands/slashCommands/${folder}`)
          .filter((file) => file.endsWith(".js"));
        for (const file of files) {
          const slashCommand = require(`../commands/slashCommands/${folder}/${file}`);
          client.slash.set(slashCommand.name, slashCommand);
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
};
