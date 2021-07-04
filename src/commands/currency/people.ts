module.exports = {
  name: "people",
  permissions: 9,
  execute(msg) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    let people = sql.prepare("SELECT * FROM currency").all();
    msg.channel.send(JSON.stringify(people, null, 2));
  },
};
