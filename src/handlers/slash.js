module.exports = {
  slashHandler(interaction, client) {
    if (!interaction.isCommand()) return;

    if (
      interaction.channel.id == "803446581222309888" ||
      interaction.channel.id == "770730379077353494"
    )
      return interaction.reply({
        content: "Commands not allowed here!",
        ephemeral: true,
      });

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
