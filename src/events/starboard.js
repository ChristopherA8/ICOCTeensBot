module.exports = {
  event(client) {
    const Starboard = require("../starboard/Starboard");

    client.on("messageReactionAdd", (reaction, user) => {
      new Starboard().run(reaction, user, "add");
    });
    client.on("messageReactionRemove", (reaction, user) => {
      new Starboard().run(reaction, user, "remove");
    });
  },
};
