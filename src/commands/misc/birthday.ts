module.exports = {
  name: "birthday",
  category: "misc",
  description:
    "Add your birthday. The bot will give you the birthday role on your birthday. Give month and day, example: 2/12 not 02/12",
  permissions: 1,
  execute(msg, args) {
    const fs = require("fs");
    const data = fs.readFileSync("./src/databases/birthdays.json");
    let birthdays = JSON.parse(data);
    for (const person of birthdays)
      if (person.id == msg.author.id) {
        msg.reply(
          "Your bithday is already added\nAsk christopher if you need to edit it"
        );
        return;
      }

    if (!args[0]) {
      msg.reply("Don't forget the month and date, like this '2/28'");
      return;
    }

    let newPerson = {
      id: msg.author.id,
      date: args[0],
    };

    birthdays.push(newPerson);
    fs.writeFileSync(
      "./src/databases/birthdays.json",
      JSON.stringify(birthdays, null, 2)
    );

    msg.reply(`Birthday added ${args[0]}`);
  },
};
