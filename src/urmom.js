const CommandManager = require('./InteractionManagers/CommandManager')

CommandManager.addCommand({
    name:"urmom",
    async execute(msg) {
        msg.reply("urmom")
        CommandManager.log("urmom", "urmom")
    }
})