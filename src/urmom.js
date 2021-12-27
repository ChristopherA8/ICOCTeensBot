const CommandManager = require("./InteractionManagers/CommandManager");

CommandManager.addCommand({
  name: "urmom",
  async execute(msg) {
    CommandManager.log("urmom", "urmom");
  },
});
