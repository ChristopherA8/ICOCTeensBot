module.exports = {
  name: "@someone",
  category: "misc",
  description: "Ping a random person",
  permissions: 1,
  async execute(msg) {
    if (msg.author.id !== "544890228507410442") return;
    const members = await msg.guild.members.fetch();
    const randMember = members.random();
    msg.channel.send(`<@${randMember.id}>`);
  },
};
