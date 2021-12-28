const { MongoClient } = require("mongodb");
const chalk = require("chalk");
const Points = require("./Points");
const Filter = require("./Filter");
const Checklist = require("./Checklist");
const Birthdays = require("./Birthdays");

class Mongo {
  constructor() {
    const url = "mongodb://localhost:27017/";

    this.client = new MongoClient(url);
  }
  async init() {
    await this.client.connect();
    console.log(
      chalk.blue.bold("[BOT]") +
        " Connected to MongoDB " +
        chalk.green("icocteens")
    );

    this.db = this.client.db("icocteens");
    this.Points = new Points(this.db);
    this.Filter = new Filter(this.db);
    this.Checklist = new Checklist(this.db);
    this.Birthdays = new Birthdays(this.db);
  }
}

module.exports = new Mongo();
