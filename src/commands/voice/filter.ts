module.exports = {
  name: "filter",
  permission: 1,
  category: "voice",
  description: "Song filters",
  execute(msg, args) {
    let filterName = msg.client.distube.getQueue(msg)?.filter;
    if (
      [`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(
        args[0]
      )
    ) {
      let filter = msg.client.distube.setFilter(msg, args[0]);
      msg.reply("Filter: " + (filter || "Off"));
    } else if (filterName) {
      let filter = msg.client.distube.setFilter(msg, filterName);
      msg.reply("Filter off");
    } else {
      msg.reply("Missing Filter Name");
    }
  },
};
