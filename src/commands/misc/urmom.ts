module.exports = {
  name: "urmom",
  permissions: 9,
  async execute(msg) {
    // const SQLite = require("better-sqlite3");
    // const sql = new SQLite("./src/databases/scores.sqlite");
    // const leaderboard = sql
    //   .prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC")
    //   .all("698590629344575500");
    // console.log(leaderboard);
    // var MongoClient = require("mongodb").MongoClient;
    // var url = "mongodb://localhost:27017/";
    // MongoClient.connect(url, function (err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("icocteens");
    //   dbo.collection("points").insertMany(leaderboard, function (err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    //   });
    // });
    /* Structure of person object
    {
      id: '698590629344575500-279032930926592000',
      user: '279032930926592000',
      guild: '698590629344575500',
      points: 5402,
      level: 22,
      name: 'christopher#8888'
    }
    */
    // var MongoClient = require("mongodb").MongoClient;
    // var url = "mongodb://localhost:27017/";
    // MongoClient.connect(url, function (err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("icocteens");
    //   dbo.createCollection("checklist", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    //   });
    // });
  },
};
