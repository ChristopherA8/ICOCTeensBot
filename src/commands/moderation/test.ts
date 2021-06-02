module.exports = {
  name: "test",
  permissions: 9,
  execute(msg) {
    const birthdays = require("../../databases/birthdays.json");
    for (const person of birthdays) {
      console.log(JSON.stringify(person, null, 2));
    }
    const fs = require("fs");
  },
};
