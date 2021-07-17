const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.ALL] });

const fs = require("fs");

const { token, prefix } = require("../config.json");

client.on(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`/help`, { type: "LISTENING" });

  // Run setup
  const files = fs
    .readdirSync(`./src/setup`)
    .filter((file) => file.endsWith(".ts"));
  for (const file of files) {
    const { setup } = require(`../src/setup/${file}`);
    setup(client);
  }

  // Run events
  const eventfiles = fs
    .readdirSync(`./src/events`)
    .filter((file) => file.endsWith(".ts"));
  for (const file of eventfiles) {
    const { event } = require(`../src/events/${file}`);
    event(client);
  }
});

client.on(`message`, async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  // rules channel
  if (msg.content !== "!rules" && msg.channel.id == "770730379077353494")
    return msg.delete();

  // Message Listeners
  const files = fs
    .readdirSync(`./src/listeners`)
    .filter((file) => file.endsWith(".ts"));
  for (const file of files) {
    const { listen } = require(`../src/listeners/${file}`);
    listen(msg);
  }

  const { commandHandler } = require("./commandHandler.ts");
  commandHandler(msg, prefix);
});

client.on(`interaction`, (interaction) => {
  if (!interaction.isCommand()) return;
  const { slashHandler } = require("./slashHandler.ts");
  slashHandler(interaction, client);
});

client.login(token);
