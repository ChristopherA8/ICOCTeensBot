module.exports = {
  name: "rules",
  permissions: 1,
  execute(msg) {
    let icocTeensRole = msg.guild.roles.cache.get(`698634625077215372`);
    if (msg.member.roles.cache.has(icocTeensRole.id)) return;

    msg.member.roles.add(icocTeensRole, {
      reason: "Member joined with !rules",
    });
  },
};
