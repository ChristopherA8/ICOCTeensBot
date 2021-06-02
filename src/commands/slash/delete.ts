module.exports = {
  name: "delete",
  permissions: 9,
  execute(msg) {
    const { token } = require("../../../config.json");
    const axios = require("axios");
    let axios1 = axios.create({
      headers: {
        Authorization: `Bot ${token}`,
      },
    });
    axios1({
      method: "delete",
      url: "https://discord.com/api/v8/applications/761792910088994816/guilds/698590629344575500/commands/848977211130380358",
    });
  },
};
