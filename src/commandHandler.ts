module.exports = {
  commandHandler(client) {
    const { Collection } = require("discord.js");
    const fs = require("fs");

    // Searches through "./commands" for files ending in .ts
    client.commands = new Collection();

    try {
      const folders = fs.readdirSync("./src/commands");
      for (const folder of folders) {
        const files = fs
          .readdirSync(`./src/commands/${folder}`)
          .filter((file) => file.endsWith(".ts"));
        for (const file of files) {
          const command = require(`../src/commands/${folder}/${file}`);
          client.commands.set(command.name, command);
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
};
