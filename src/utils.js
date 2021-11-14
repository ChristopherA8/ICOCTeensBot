const getFilter = (client) => {
  const chalk = require("chalk");
  let MongoClient = require("mongodb").MongoClient;
  let url = "mongodb://localhost:27017/mydb";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("icocteens");
    dbo.collection("filter").findOne({}, function (err, result) {
      if (err) throw err;
      client.filter = result.words;
      console.log(chalk.blue.bold("[BOT]") + " Fetched filter");
      db.close();
    });
  });
};

exports.getFilter = getFilter;
