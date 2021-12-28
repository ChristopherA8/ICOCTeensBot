const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("birthday")
    .setDescription("Manage your birthdate, and view others birthdays")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("set")
        .setDescription("Add your birthday")
        .addNumberOption((option) =>
          option
            .setName("month")
            .setDescription("Month of the year")
            .setRequired(true)
        )
        .addNumberOption((option) =>
          option
            .setName("day")
            .setDescription("Day of the month")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("lookup")
        .setDescription("Find someone elses birthday")
        .addUserOption((option) =>
          option
            .setName("member")
            .setDescription("Member to lookup")
            .setRequired(true)
        )
    ),
  permissions: 1,
  async execute(interaction) {
    const { Birthdays } = require("../../../mongo/Mongo");

    switch (interaction.options.getSubcommand()) {
      case "set":
        let day = interaction.options.getNumber("day");
        let month = interaction.options.getNumber("month");

        if (await Birthdays.getBirthday(interaction.user.id)) {
          await Birthdays.updateBirthday({
            id: interaction.user.id,
            day: day,
            month: month,
          });
        } else {
          await Birthdays.addBirthday({
            id: interaction.user.id,
            day: day,
            month: month,
          });
        }

        interaction.reply({ content: `Birthday set: ${month}/${day}` });
        break;
      case "lookup":
        let member = await interaction.options.getMember("member");
        let birthday = await Birthdays.getBirthday(member.id);
        if (!birthday)
          return interaction.reply({
            content: `${member.displayName} has no birthday set`,
          });

        interaction.reply({
          content: `${member.displayName}'s birthdate: ${birthday.month}/${birthday.day}`,
        });
        break;

      default:
        interaction.reply("An error has occured! Please try again");
        break;
    }
  },
};
