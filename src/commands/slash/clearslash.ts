module.exports = {
  name: "clearslash",
  permissions: 9,
  async execute(msg) {
    const chalk = require("chalk");
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v9");

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
    let applicationCommandData = [];

    rest
      .put(
        Routes.applicationGuildCommands(
          msg.client.user.id,
          process.env.GUILD_ID
        ),
        {
          body: applicationCommandData,
        }
      )
      .then(() =>
        console.log(
          chalk.bold.blue("[BOT]") +
            " Successfully cleared application commands"
        )
      )
      .catch(console.error);
  },
};
