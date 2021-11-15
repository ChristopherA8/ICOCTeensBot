const { DisTube } = require("distube");
const { distubeEvents } = require("./events");
const { client } = require("../index");
const chalk = require("chalk");

class Voice {
  constructor(client) {
    this.client = new DisTube(client, {
      searchSongs: 0,
      emitNewSongOnly: true,
    });
  }
  async init() {
    await distubeEvents(this.client);
    console.log(chalk.blue.bold("[BOT]") + " Distube voice client setup");
  }
  async getClient() {
    return this.client;
  }
}

module.exports = new Voice(client);
