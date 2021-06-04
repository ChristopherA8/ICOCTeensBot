module.exports = {
  setup(client) {
    const DisTube = require("distube");
    const distube = new DisTube(client, {
      searchSongs: false,
      emitNewSongOnly: true,
    });
    client.distube = distube;
  },
};
