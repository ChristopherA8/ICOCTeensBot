const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("checklist")
    .setDescription("Checklist for staff use")
    .addSubcommand((subcommand) =>
      subcommand.setName("show").setDescription("Show the checklist")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("add")
        .setDescription("Add an item to the list")
        .addStringOption((option) =>
          option
            .setName("item")
            .setDescription("Checklist item content")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("remove")
        .setDescription("Remove an item from the list")
        .addIntegerOption((option) =>
          option
            .setName("remove_id")
            .setDescription("Checklist item id")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("check")
        .setDescription("Mark an item as done")
        .addIntegerOption((option) =>
          option
            .setName("check_id")
            .setDescription("Checklist item id")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("uncheck")
        .setDescription("Mark an item as not done")
        .addIntegerOption((option) =>
          option
            .setName("uncheck_id")
            .setDescription("Checklist item id")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("edit")
        .setDescription("Edit an item in the list")
        .addIntegerOption((option) =>
          option
            .setName("edit_item_id")
            .setDescription("Checklist item id")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("edit_item_content")
            .setDescription("Checklist item content")
            .setRequired(true)
        )
    ),
  permissions: 5,
  async execute(interaction) {
    const { Checklist } = require("../../../mongo/Mongo");
    const { MessageEmbed } = require("discord.js");

    switch (interaction.options.getSubcommand()) {
      case "show":
        let aList = await Checklist.getAll();

        const listEmbed = new MessageEmbed()
          .setAuthor("Checklist")
          .setFooter(`${aList.length} items`);

        for (item of aList) {
          let senor = await interaction.guild.members.cache.get(item.creator);
          listEmbed.addField(
            `${item.id + 1}.`,
            `\`\`\`${item.content ? item.content : "null"} | ${
              item.completed ? "✅" : "❌"
            }\`\`\``,
            true
          );
        }

        interaction.reply({ embeds: [listEmbed] });
        break;

      case "add":
        let bList = await Checklist.getAll();
        let addInput = interaction.options.getString("item");

        let anItem = {
          id: bList.length,
          content: addInput,
          creator: interaction.user.id,
          completed: false,
        };

        await Checklist.addItem(anItem);

        let cList = await Checklist.getAll();

        const addEmbed = new MessageEmbed()
          .setAuthor("Checklist")
          .setFooter(`${cList.length} items`);

        for (item of bList) {
          let senora = await interaction.guild.members.cache.get(item.creator);
          addEmbed.addField(
            `Item ${item.id + 1}`,
            `\`\`\`${item.content ? item.content : "null"}\`\`\``,
            false
          );
        }

        interaction.reply({
          content: `Added \`${addInput}\``,
          embeds: [addEmbed],
        });
        break;

      case "remove":
        let remove_id = interaction.options.getInteger("remove_id");
        let rItem = await Checklist.getItem(remove_id - 1);
        if (!rItem)
          return interaction.reply({
            content: "Item ID not found",
            ephemeral: true,
          });

        Checklist.removeItem(remove_id - 1);
        interaction.reply({
          content: `Removed item ${remove_id} from checklist`,
        });
        break;

      case "check":
        let check_id = interaction.options.getInteger("check_id");
        let cItem = await Checklist.getItem(check_id - 1);
        if (!cItem)
          return interaction.reply({
            content: "Item ID not found",
            ephemeral: true,
          });

        Checklist.checkItem(check_id - 1);
        interaction.reply({ content: `Item ${check_id} marked as done` });
        break;

      case "uncheck":
        let uncheck_id = interaction.options.getInteger("uncheck_id");
        let uItem = await Checklist.getItem(uncheck_id - 1);
        if (!uItem)
          return interaction.reply({
            content: "Item ID not found",
            ephemeral: true,
          });

        Checklist.uncheckItem(uncheck_id - 1);
        interaction.reply({ content: `Item ${uncheck_id} marked as not done` });
        break;

      case "edit":
        let editId = await interaction.options.getInteger("edit_item_id");
        let editContent = await interaction.options.getString(
          "edit_item_content"
        );
        let eItem = await Checklist.getItem(editId - 1);
        if (!eItem)
          return interaction.reply({
            content: "Item ID not found",
            ephemeral: true,
          });

        await Checklist.editItem({
          id: editId - 1,
          content: editContent,
          creator: interaction.user.id,
          completed: eItem.completed,
        });

        interaction.reply({
          content: `Changed item ${editId} to ${editContent}`,
        });
        break;

      default:
        break;
    }
  },
};
