module.exports = {
  name: "bible",
  permissions: 1,
  execute(msg, args) {
    const axios = require("axios");

    let url;
    if (!args[3]) {
      url = "https://bible-api.com/" + args[0] + "+" + args[1] + ":" + args[2];
    } else {
      url =
        "https://bible-api.com/" +
        args[0] +
        "+" +
        args[1] +
        ":" +
        args[2] +
        "-" +
        args[3];
    }

    axios
      .get(url)
      .then((out) => {
        msg.reply(out.data.text);
      })
      .catch((err) => {
        msg.reply("Verse not found");
      });
  },
};
