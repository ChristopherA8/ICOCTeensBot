module.exports = {
  name: "checklist",
  permissions: 5,
  category: "moderation",
  description: "Checklist for staff use",
  execute(msg, args) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/checklist.sqlite");
    const { MessageEmbed } = require("discord.js");

    switch (args[0]) {
      case "add":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item Name");
        sql.prepare("SELECT * FROM checklist").get();
        sql
          .prepare(
            "INSERT INTO checklist (item, creator, completed) VALUES (?, ?, ?);"
          )
          .run(input.join(" "), msg.author.tag, "no");
        msg.reply(`Added item!`);
        break;
      case "check":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        let item = sql
          .prepare("SELECT * FROM checklist WHERE id = ?")
          .get(input[0]);
        sql
          .prepare(
            "REPLACE INTO checklist (id, item, creator, completed, notes) VALUES (?, ?, ?, ?, ?);"
          )
          .run(item.id, item.item, item.creator, "yes", item.notes);
        msg.reply(`Checked item ${item.id}`);
        break;
      case "uncheck":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        let item2 = sql
          .prepare("SELECT * FROM checklist WHERE id = ?")
          .get(input[0]);
        sql
          .prepare(
            "REPLACE INTO checklist (id, item, creator, completed, notes) VALUES (?, ?, ?, ?, ?);"
          )
          .run(item2.id, item2.item, item2.creator, "no", item2.notes);
        msg.reply(`Checked item ${item2.id}`);
        break;
      case "edit":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        let stuff = sql
          .prepare("SELECT * FROM checklist WHERE id = ?")
          .get(input[0]);
        let newItem = input;
        newItem.shift();
        sql
          .prepare(
            "REPLACE INTO checklist (id, item, creator, completed) VALUES (?, ?, ?, ?);"
          )
          .run(stuff.id, newItem.join(" "), stuff.creator, stuff.completed);
        msg.reply(`Edited item ${stuff.id}`);
        break;
      case "del":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        sql.prepare("DELETE FROM checklist WHERE id = ?").run(input[0]);
        msg.reply(`Removed item ${input[0]}!`);
        break;
      case "note":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        var item3 = sql
          .prepare("SELECT * FROM checklist WHERE id = ?")
          .get(input[0]);
        const listEmbed2 = new MessageEmbed()
          .setColor("#47a8e8")
          .addFields(
            { name: "Item:", value: `${item3.item}`, inline: false },
            {
              name: "Note:",
              value: `\`\`\`${item3.notes ? item3.notes : " "}\`\`\``,
              inline: false,
            }
          )
          .setFooter(`Creator: ${item3.creator}`);
        msg.reply(listEmbed2);
        break;
      case "addnote":
        var input = args;
        input.shift();
        if (!input[0]) return msg.reply("Missing Item ID");
        var item4 = sql
          .prepare("SELECT * FROM checklist WHERE id = ?")
          .get(input[0]);
        let note = input;
        note.shift();
        sql
          .prepare(
            "REPLACE INTO checklist (id, item, creator, completed, notes) VALUES (?, ?, ?, ?, ?);"
          )
          .run(
            item4.id,
            item4.item,
            item4.creator,
            item4.completed,
            note.join(" ")
          );
        msg.reply(`Note Added!`);
        break;
      case "help":
        const helpEmbed = new MessageEmbed()
          .setAuthor("Checklist Options")
          .setColor("#47a8e8")
          .addFields(
            { name: "add", value: "!checklist add This is a new item" },
            { name: "check", value: "!checklist check 1" },
            { name: "uncheck", value: "!checklist uncheck 1" },
            { name: "del", value: "!checklist del 1" },
            { name: "note", value: "!checklist note 1" },
            { name: "addnote", value: "!checklist addnote 1 This is a note" },
            {
              name: "edit",
              value: "!checklist edit 1 This replaces the old note",
            }
          );
        msg.reply(helpEmbed);
        break;
      default:
        let items = sql.prepare("SELECT * FROM checklist ORDER BY id").all();
        const listEmbed = new MessageEmbed()
          .setTitle(`Checklist`)
          .setColor("#47a8e8")
          .setFooter(`Total Items: ${items.length}`);
        for (const things of items) {
          let status;
          if (things.completed == "yes") {
            status = "✅";
          } else {
            status = "⛔";
          }
          listEmbed.addField(
            `឵${things.creator}`,
            `\`\`\`${things.id}: ${things.item} | ${status}\`\`\``
          );
        }
        msg.reply(listEmbed);

        break;
    }
  },
};
