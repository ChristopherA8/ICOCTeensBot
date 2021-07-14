// Helper function to check if users exist in the databases

module.exports = {
  doIExist(myID, ping) {
    const SQLite = require("better-sqlite3");
    const bankDB = new SQLite("./src/databases/bank.sqlite");
    const walletDB = new SQLite("./src/databases/currency.sqlite");

    // Checks if pinged person exists
    if (ping) {
      let theirWallet = walletDB
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(ping.id);
      let theirBank = bankDB
        .prepare("SELECT * FROM bank WHERE id = ?")
        .get(ping.id);
      if (!theirWallet) {
        walletDB
          .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
          .run(ping.id, 10);
        theirWallet = walletDB
          .prepare("SELECT * FROM currency WHERE id = ?")
          .get(ping.id);
      }
      if (!theirBank) {
        bankDB
          .prepare("INSERT OR REPLACE INTO bank (id, money) VALUES (?, ?);")
          .run(ping.id, 10);
        theirWallet = bankDB
          .prepare("SELECT * FROM bank WHERE id = ?")
          .get(ping.id);
      }
      return;
    }

    let theirWallet = walletDB
      .prepare("SELECT * FROM currency WHERE id = ?")
      .get(myID);
    let theirBank = bankDB.prepare("SELECT * FROM bank WHERE id = ?").get(myID);
    if (!theirWallet) {
      walletDB
        .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
        .run(myID, 10);
      theirWallet = walletDB
        .prepare("SELECT * FROM currency WHERE id = ?")
        .get(myID);
    }
    if (!theirBank) {
      bankDB
        .prepare("INSERT OR REPLACE INTO bank (id, money) VALUES (?, ?);")
        .run(myID, 10);
      theirWallet = bankDB.prepare("SELECT * FROM bank WHERE id = ?").get(myID);
    }
  },
};
