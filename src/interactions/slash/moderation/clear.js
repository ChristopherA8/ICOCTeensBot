const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Bulk delete messages")
    .addIntegerOption((option) =>
      option.setName("number").setDescription("Number of messages to clear")
    ),
  permissions: 5,
  async execute(interaction) {
    let amount = interaction.options.getInteger("number");

    if (!(amount >= 1 && amount <= 100)) {
      // Wait for discord.js to add support for integer option ranges
      msg.reply("Hold up, don't clear the whole chat");
    } else {
      interaction.channel.messages
        .fetch()
        .then(() => {
          interaction.channel
            .bulkDelete(amount == 100 ? amount : amount + 1)
            .catch((err) => {
              interaction.reply(`${err}`);
            });
        })
        .catch((err) => {
          interaction.reply("Error fetching messages");
        });
    }
  },
};
