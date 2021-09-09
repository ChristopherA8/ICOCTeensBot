module.exports = {
  async listen(msg) {
    /*
    const SQLite = require("better-sqlite3");

    // Create SQLite database
    const sql = new SQLite("./src/databases/scores.sqlite");

    const top = sql
      .prepare(
        "SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 1"
      )
      .get("698590629344575500");
    const topMem = await msg.guild.members.cache.get("279032930926592000"); // top.id.substr(19)
    // console.log(
    //   JSON.stringify(msg.guild.members.cache.get("279032930926592000"))
    // );

    if (!topMem.roles.cache.some((role) => role.id == `808429363392806952`)) {
      topMem.roles.add(`808429363392806952`);
      msg.guild.members.cache
        .filter((mem) =>
          mem.roles.cache.some((role) => role.id == `808429363392806952`)
        )
        .forEach((member) => {
          member.roles.remove(`808429363392806952`);
        });
    }*/
  },
};
