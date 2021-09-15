module.exports = {
  async commandHandler(msg, prefix) {
    const { Permissions } = require("discord.js");

    if (msg.content.startsWith(prefix)) {
      const args = msg.content.slice(prefix.length).split(/ +/);
      const commandName = args.shift().toLowerCase();
      if (!msg.client.commands.has(commandName)) return;
      const command = msg.client.commands.get(commandName);

      try {
        /*
         * 1. @everyone
         * 2. ICOC Goat
         * 3. ICOC Champ
         * 4. Partner In Christ
         * 5. Staff and emilio
         * 6. Teen Leaders
         * 7. Admin
         * 8. Owner (me and chris)
         * 9. Bot Owner
         * 10. nothing, it just looks more even this way :)
         */
        switch (command.permissions) {
          case 1:
            command.execute(msg, args);
            break;
          case 2:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `698643225443041311` // ICOC Goat
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 3:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `776286858342170636` // ICOC Champ
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 4:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `776557333656109078` // Partner in Christ
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 5:
            if (
              msg.member.roles.cache.some(
                (role) =>
                  role.id == "698594429711417415" || // Staff
                  role.id == "766331396977066044" || // Admin
                  msg.member.id == "493159317630091285" // Staff and emilio
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 6:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `698650459187183672` // Teen Leaders
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 7:
            if (msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
              command.execute(msg, args);
              break;
            }
            return;
          case 8:
            if (
              msg.member.id == `279032930926592000` ||
              msg.member.id == `620438897217896459` // Owners
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 9:
            if (msg.member.id == `279032930926592000`) {
              // Bot Owner :)
              command.execute(msg, args);
              break;
            }
            msg.channel.send(`You are not the bot owner`);
            return;
          case 10:
            msg.channel.send(`Access Denied: Missing Permission Level 10`);
            break;
          default:
            command.execute(msg, args);
            break;
        }
      } catch (error) {
        console.error(error);
        await msg.channel.send(
          `**Crashlog:** ${error}\n||<@279032930926592000>||`
        );
      }
    }
  },
};
