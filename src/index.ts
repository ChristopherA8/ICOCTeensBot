const { Client, Intents, Collection } = require("discord.js");
const client = new Client({ intents: [Intents.ALL] });

const fs = require("fs");

const { token, prefix } = require("../config.json");

client.on(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`/help`, { type: "LISTENING" });

  // Logging
  const files = fs
    .readdirSync(`./src/logging`)
    .filter((file) => file.endsWith(".ts"));
  for (const file of files) {
    const { log } = require(`../src/logging/${file}`);
    log(client);
  }

  // Add commands to Collection
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

  // Add slash commands to collection
  client.slashCommands = new Collection();
  try {
    const files = fs
      .readdirSync(`./src/slash/`)
      .filter((file) => file.endsWith(".ts"));
    for (const file of files) {
      const command = require(`./slash/${file}`);
      client.slashCommands.set(command.name, command);
    }
  } catch (err) {
    console.error(err);
  }
});

client.on(`message`, async (msg) => {
  const { Permissions } = require("discord.js");

  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  const { commandHandler } = require("./commandHandler.ts");
  commandHandler(msg, prefix);
});

client.on(`interaction`, (interaction) => {
  if (!interaction.isCommand()) return;
  const { slashHandler } = require("./slashHandler.ts");
  slashHandler(interaction, client);
});

client.login(token);
