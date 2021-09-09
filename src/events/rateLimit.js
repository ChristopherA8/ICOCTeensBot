module.exports = {
  event(client) {
    let x = 0;
    client.on("rateLimit", (data) => {
      console.log(x + " " + JSON.stringify(data, null, 2));
      x++;
    });
  },
};
