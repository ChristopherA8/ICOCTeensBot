module.exports = {
  name: "@someone",
  category: "misc",
  description: "Ping a random person",
  permissions: 11, // Special permission 11 requires a memberID
  memberIds: [544890228507410442], // Jack
  async execute(msg) {
    msg.channel.send("ur mom");
    if (msg.author.id !== "544890228507410442") return;
    const members = await msg.guild.members.fetch();
    const randMember = members.random();
    msg.channel.send(`<@${randMember.id}>`);
  },
};
