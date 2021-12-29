const chalk = require("chalk");
const { Interaction } = require("discord.js");
const fs = require("fs");

class Logs {
  constructor() {
    this.commandLogPath = "./src/logs/commands.log";
    this.miscLogPath = "misc.log";
  }

  async init() {
    console.log(
      chalk.blue.bold("[BOT]") +
        " Logging command usage to " +
        chalk.yellow(this.commandLogPath)
    );
  }

  async logCommand({ name }, member) {
    let date = new Date();
    let stream = fs.createWriteStream(this.commandLogPath, { flags: "a" });
    stream.write(
      `[${date.getMonth()}/${date.getDate()}/${date.getFullYear()}] ${
        member.user.tag
      } used !${name}\n`
    );
    stream.end();
  }

  async logSlash(interaction) {
    let date = new Date();
    let stream = fs.createWriteStream(this.commandLogPath, { flags: "a" });
    stream.write(
      `[${date.getMonth()}/${date.getDate()}/${date.getFullYear()}] ${
        interaction.user.tag
      } used /${interaction.commandName}\n`
    );
    stream.end();
  }
}

module.exports = new Logs();
