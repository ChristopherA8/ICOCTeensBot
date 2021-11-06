module.exports = {
  name: "eval",
  permissions: 9,
  execute(msg, args) {
    const { MessageEmbed } = require("discord.js");

    var input = args.join(" ");

    const embed = new MessageEmbed()
      .setAuthor("Evaluated JavaScript")
      .setColor("#00FF86")
      .addFields(
        {
          name: "Input:",
          value: input ? `\`\`\`${input}\`\`\`` : "```No Input```",
        },
        {
          name: "Output:",
          value: input ? `\`\`\`js\n${eval(input)}\`\`\`` : "```No Input```",
        }
      );
    msg.channel.send({ embeds: [embed] });
  },
};
