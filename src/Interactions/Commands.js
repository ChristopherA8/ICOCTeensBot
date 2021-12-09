const chalk = require("chalk");

class Commands {
    constructor() {
        this.commands = [];
    }

    async init() {
        console.log(chalk.blue.bold("[BOT]") + " Text commands loaded")
    }

    async addCommand({name, command, desc = "", category = ""}) {
    }

    async executeCommand(msg) {

    }

    async commandCount() {
        return this.commands.length
    }

}