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

    const { Points } = require("../../mongo/Mongo");

    const me2 = await Points.getLeaderboard();
    console.log(await me2);
  },
};
