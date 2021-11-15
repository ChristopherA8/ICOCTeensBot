module.exports = {
  async slashHandler(interaction, client) {
    // const { Permissions } = require("discord.js");

    if (!client.slash.has(interaction.commandName)) return;
    const slash = client.slash.get(interaction.commandName);

    // if (
    //   interaction.channel.id == "803446581222309888" ||
    //   interaction.channel.id == "770730379077353494"
    // )
    //   return interaction.reply({
    //     content: "Commands not allowed here!",
    //     ephemeral: true,
    //   });

    try {
      slash.execute(interaction);
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
      // switch (slash.permissions) {
      //   case 1:
      //     slash.execute(interaction, client);
      //     break;
      //   case 2:
      //     if (
      //       interaction.member.roles.cache.some(
      //         (role) => role.id == `698643225443041311` // ICOC Goat
      //       )
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 3:
      //     if (
      //       interaction.member.roles.cache.some(
      //         (role) => role.id == `776286858342170636` // ICOC Champ
      //       )
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 4:
      //     if (
      //       interaction.member.roles.cache.some(
      //         (role) => role.id == `776557333656109078` // Partner in Christ
      //       )
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 5:
      //     if (
      //       interaction.member.roles.cache.some(
      //         (role) =>
      //           role.id == `698594429711417415` ||
      //           interaction.member.id == "493159317630091285" // Staff and emilio
      //       )
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 6:
      //     if (
      //       interaction.member.roles.cache.some(
      //         (role) => role.id == `698650459187183672` // Teen Leaders
      //       )
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 7:
      //     if (
      //       interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 8:
      //     if (
      //       interaction.member.id == `279032930926592000` ||
      //       interaction.member.id == `620438897217896459` // Owners
      //     ) {
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     return;
      //   case 9:
      //     if (interaction.member.id == `279032930926592000`) {
      //       // Bot Owner :)
      //       slash.execute(interaction, client);
      //       break;
      //     }
      //     interaction.reply({
      //       content: "You are not the bot owner",
      //       ephemeral: true,
      //     });
      //     return;
      //   case 10:
      //     interaction.reply({
      //       content: "Access Denied: Missing Permission Level 10",
      //       ephemeral: true,
      //     });
      //     break;
      //   default:
      //     slash.execute(interaction, client);
      //     break;
      // }
    } catch (error) {
      console.error(error);
      await interaction.channel.send(`${error}\n||<@279032930926592000>||`);
    }
  },
};
