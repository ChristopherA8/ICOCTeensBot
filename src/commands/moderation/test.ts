module.exports = {
  name: "test",
  permissions: 9,
  execute(msg) {
    const { embed } = require("../../helpers/embed.ts");
    msg.channel.send(embed("ur mom", null, null, "hi", null, null, null, null));
  },
};
