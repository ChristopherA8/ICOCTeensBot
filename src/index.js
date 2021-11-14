const { Client, Intents } = require("discord.js");
const client = new Client({ intents: Object.values(Intents.FLAGS) });
const fs = require("fs");
require("dotenv").config();

client.on(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}`);
  // client.user.setActivity(`/help`, { type: "WATCHING" });
  setInterval(() => {
    client.user.setActivity("Jujutsu High", { type: "WATCHING" });
  }, 60 * 60 * 1000); // 1hr

  // Run setup
  const files = fs
    .readdirSync(`./src/setup`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { setup } = require(`../src/setup/${file}`);
    setup(client);
  }

  // Run events
  const eventfiles = fs
    .readdirSync(`./src/events`)
    .filter((file) => file.endsWith(".js"));
  for (const file of eventfiles) {
    const { event } = require(`../src/events/${file}`);
    event(client);
  }
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  // rules channel
  if (msg.content !== "!rules" && msg.channel.id == "770730379077353494")
    return msg.delete();

  // Message Listeners
  const files = fs
    .readdirSync(`./src/listeners`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { listen } = require(`../src/listeners/${file}`);
    await listen(msg);
  }

  const { commandHandler } = require("./handlers/commands.js");
  commandHandler(msg, process.env.PREFIX);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const { slashHandler } = require("./handlers/slash.js");
    slashHandler(interaction, client);
  }

  if (interaction.isSelectMenu()) {
    const { menuHandler } = require("./handlers/menus.js");
    await menuHandler(interaction, client);
  }

  if (interaction.isButton()) {
    const { buttonHandler } = require("./handlers/buttons.js");
    buttonHandler(interaction, client);
  }
});

client.login(process.env.TOKEN);
