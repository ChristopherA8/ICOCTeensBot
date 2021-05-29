const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.ALL] });

const { token, prefix } = require("./config.json");

client.on(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`/help`, { type: "LISTENING" });
});

client.on(`message`, (msg) => {
  if (msg.user.bot) return;
  if (msg.content == `ping`) {
    msg.reply(`pong`);
  }
});

client.on(`interaction`, (interaction) => {
  console.log(interaction);
});

client.login(token);
