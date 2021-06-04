module.exports = {
  name: "help",
  execute(interaction) {
    interaction.reply(JSON.stringify(interaction.client.commands, null, 2));
  },
};
