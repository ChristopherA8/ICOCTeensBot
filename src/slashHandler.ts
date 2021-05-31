module.exports = {
  slashHandler(interaction, client) {
    const commandName = interaction.commandName;
    if (!client.slashCommands.has(commandName)) return;
    const command = client.slashCommands.get(commandName);

    try {
      command.execute(interaction);
    } catch (err) {
      console.log(`Error executing slash command`);
    }
  },
};
