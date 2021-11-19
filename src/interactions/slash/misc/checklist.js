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
    /*
    add
    !checklist add This is a new item
    check
    !checklist check 1
    uncheck
    !checklist uncheck 1
    del
    !checklist del 1
    note
    !checklist note 1 [old]
    addnote
    !checklist addnote 1 This is a note [old]
    edit
    !checklist edit 1 This replaces the old note [old]
    */
    const { Checklist } = require("../../../mongo/Mongo");
    const { MessageEmbed } = require("discord.js");

    switch (interaction.options.getSubcommand()) {
      case "show":
        let aList = await Checklist.getAll();

        const listEmbed = new MessageEmbed()
          .setAuthor("Checklist")
          .setFooter(`${aList.length} items`);

        for (item of aList) {
          let senor = interaction.guild.members.cache.get(item.creator);
          listEmbed.addField(
            `Item ${item.id + 1} | ${senor.user.tag}`,
            item.content ? item.content : "none",
            false
          );
        }

        interaction.reply({ embeds: [listEmbed] });
        break;

      case "add":
        let bList = await Checklist.getAll();
        let addInput = interaction.options.getString("input");

        let anItem = {
          id: bList.length,
          content: addInput,
          creator: interaction.user.id,
          completed: false,
        };

        let newItem = await Checklist.addItem(anItem);
        console.log(JSON.stringify(newItem, null, 2));

        let cList = await Checklist.getAll();

        const addEmbed = new MessageEmbed()
          .setAuthor("Checklist")
          .setFooter(`${cList.length} items`);

        //\`${newItem.content}\`
        interaction.reply({
          content: `Added `,
          embeds: [addEmbed],
        });
        break;

      case "remove":
        break;

      case "check":
        break;

      case "edit":
        let editId = interaction.options.getInteger("edit_item_id");
        let editContent = interaction.options.getString("edit_item_content");
        await Checklist.editItem({
          id: editId - 1,
          content: editContent,
          creator: interaction.user.id,
          completed: false,
        });
        break;

      default:
        break;
    }
  },
};
