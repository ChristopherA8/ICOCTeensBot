const chalk = require("chalk");
const { Collection } = require("discord.js");

class CommandManager {
    constructor() {
        this.commands = new Collection();
    }

    async init() {
        console.log(chalk.blue.bold("[BOT]") + " Text commands loaded")
    }

    addCommand(command) {
        this.commands.set(command.name, command)
    }

    // async executeCommand(name) {

    // }

    async getCommands() {
        return this.commands
    }

    async commandCount() {
        return this.commands.length
    }

    // 𝐹𝒶𝓃𝒸𝓎 logging for commands
    async log(data, name) {
        console.log(chalk.magenta.bold(`[${name}] `) + data)
    }

}

module.exports = new CommandManager()