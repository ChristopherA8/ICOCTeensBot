module.exports = {
  setup(client) {
    const chalk = require("chalk");
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v9");
    const { Collection } = require("discord.js");
    const fs = require("fs");

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
    let applicationCommandData = [];

    // Add slash commands to Collection
    client.slash = new Collection();

    try {
      const folders = fs.readdirSync("./src/interactions/slash");
      for (const folder of folders) {
        const files = fs
          .readdirSync(`./src/interactions/slash/${folder}`)
          .filter((file) => file.endsWith(".js"));
        for (const file of files) {
          const command = require(`../interactions/slash/${folder}/${file}`);
          client.slash.set(command.data.name, command);

          applicationCommandData.push(command.data.toJSON());
        }
      }
    } catch (err) {
      console.error(err);
    }

    rest
      .put(
        Routes.applicationGuildCommands(client.user.id, process.env.GUILD_ID),
        {
          body: applicationCommandData,
        }
      )
      .then(() =>
        console.log(
          chalk.bold.blue("[BOT]") +
            " Successfully registered application commands"
        )
      )
      .catch(console.error);
  },
};
