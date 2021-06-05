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
});

client.on("guildMemberAdd", (join) => {
  if (join.guild.id !== `698590629344575500`) return;
  const channel = join.guild.channels.cache.get(`698591277205422171`);
  channel.send(`Welcome <@${join.id}> to ICOC Teens!`);
  const welcomeEmbed = new MessageEmbed()
    .setTitle(`Welcome to the ICOC Teens Server`)
    .setDescription(
      `Thanks for joining the ICOC Teens Server. To gain access to the server please fill out this google form. It helps us keep track of who joins, so we can keep the server a safe place for everyone.\nForm Link: <https://docs.google.com/forms/d/e/1FAIpQLSfatFjGGgYmdMjsPFZKM-KX8zEuWvlKi76KX8XNceGTbEiMlw/viewform>\nIf you have any issue or questions regarding the form, don't hesitate to DM a staff member for assistance.`
    )
    .setColor("#47a8e8");
  join.send(welcomeEmbed);
});

client.on(`message`, async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

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
