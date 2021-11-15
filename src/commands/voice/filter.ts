module.exports = {
  name: "filter",
  permission: 1,
  category: "voice",
  description: "Song filters",
  async execute(msg, args) {
    const Voice = require("../../voice/Voice");
    let distube = await Voice.getClient();

    let filterName = distube.getQueue(msg)?.filter;
    if (
      [`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(
        args[0]
      )
    ) {
      let filter = distube.setFilter(msg, args[0]);
      msg.reply("Filter: " + (filter || "Off"));
    } else if (filterName) {
      distube.setFilter(msg, filterName);
      msg.reply("Filter off");
    } else {
      msg.reply("Missing Filter Name");
    }
  },
};
