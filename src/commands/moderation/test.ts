module.exports = {
  name: "test",
  permissions: 9,
  execute(msg) {
    let fields = [{ name: "name", value: "value", inline: true }];
    for (const field of fields) {
      console.log(field.name);
    }
  },
};
