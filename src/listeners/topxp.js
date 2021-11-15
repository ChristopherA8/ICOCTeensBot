module.exports = {
  async listen(msg) {
    const { Points } = require("../mongo/Mongo");
    let person = await Points.getLeader();

    const topMem = await msg.guild.members.cache.get(`${person.user}`);

    if (!topMem.roles.cache.some((role) => role.id == `808429363392806952`)) {
      msg.guild.members.cache
        .filter((mem) =>
          mem.roles.cache.some((role) => role.id == `808429363392806952`)
        )
        .forEach((member) => {
          member.roles.remove(`808429363392806952`);
        });
      topMem.roles.add(`808429363392806952`);
    }
  },
};
