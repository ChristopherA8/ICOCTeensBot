module.exports = {
  name: "oldpoll",
  category: "misc",
  description: "Make a poll, example: !oldpoll dog or cat-dog-cat-30",
  permissions: 2,
  execute(msg, args) {
    const pollEmbed = require("discord.js-poll-embed");

    let input = args.join(" ");
    if (input == "") {
      msg.reply("Missing values");
      return;
    }
    let values = input.split("-");
    pollEmbed(
      msg,
      values[0],
      [values[1], values[2]],
      values[3],
      ["1️⃣", "2️⃣"],
      "🛑"
    );
  },
};
