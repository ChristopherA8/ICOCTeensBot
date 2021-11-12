module.exports = {
  async setup(client) {
    const guild = client.guilds.cache.get("698590629344575500");
    const birthdayRole = guild.roles.cache.get("832022073366806531");
    const fs = require("fs");
    // let communityAnnouncements = guild.channels.cache.get("818309077431746592");

    setInterval(() => {
      let now = new Date();
      let monthDay = now.getMonth() + 1 + "/" + now.getDate();

      let raw = fs.readFileSync("./src/databases/birthdays.json");
      let birthdays = JSON.parse(raw);

      // let membersWithRole = guild.members.cache.filter((member) =>
      //   member.roles.cache.has("832022073366806531")
      // );

      for (const person of birthdays) {
        if (person.date == monthDay) {
          let member = guild.members.cache.get(person.id);
          member.roles.add(birthdayRole);
          // if (!member.roles.cache.has(birthdayRole))
          //   communityAnnouncements.send(`Happy Birthday <@${member.id}>!!!`);
        }
      }
    }, 60 * 60 * 1000);
    // 1hr in milliseconds
  },
};
