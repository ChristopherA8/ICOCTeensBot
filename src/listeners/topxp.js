module.exports = {
  async listen(msg) {
    const { Points } = require("../mongo/Mongo");
    let person = await Points.getLeader();

    const topMem = await msg.guild.members.cache.get(`${person.user}`);

    if (
      !topMem.roles.cache.some(
        (role) => role.id == process.env.XP_LEADER_ROLE_ID
      )
    ) {
      msg.guild.members.cache
        .filter((mem) =>
          mem.roles.cache.some(
            (role) => role.id == process.env.XP_LEADER_ROLE_ID
          )
        )
        .forEach((member) => {
          member.roles.remove(process.env.XP_LEADER_ROLE_ID);
        });
      topMem.roles.add(process.env.XP_LEADER_ROLE_ID);
    }
  },
};
