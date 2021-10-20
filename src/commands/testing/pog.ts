module.exports = {
  name: "pog",
  permissions: 9,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("Clubs List")
      .setDescription(
        "Use the dropdown below to join some of our club channels"
      )
      .setColor("#47a8e8");

    msg.channel.send({
      embeds: [embed],
      components: [
        {
          type: 1,
          components: [
            {
              type: 3,
              custom_id: "clubs_select",
              options: [
                {
                  label: "Anime",
                  value: "anime",
                  description: "Discuss all things weeb/otaku related",
                },
                {
                  label: "Art",
                  value: "art",
                  description: "Flex your art skilz",
                },
                {
                  label: "Athletics",
                  value: "athletics",
                  description: "sweating intensifies",
                },
                {
                  label: "Fashion",
                  value: "fashion",
                  description: "Show off your fit",
                },
                {
                  label: "Book",
                  value: "book",
                  description: "These people like to read ig",
                },
                {
                  label: "Dungeons & Dragons",
                  value: "dnd",
                  description: "Play dnd with people",
                },
                {
                  label: "Food",
                  value: "food",
                  description: "Show us what you cook/eat",
                },
                {
                  label: "Gaming",
                  value: "gaming",
                  description: "gaming gaming gaming",
                },
                {
                  label: "Movies & TV",
                  value: "movie",
                  description: "Share what shows your watching",
                },
                {
                  label: "Music",
                  value: "music",
                  description: "Discuss all things music related",
                },
                {
                  label: "Nature",
                  value: "nature",
                  description: "These people touch grass",
                },
                {
                  label: "Pets",
                  value: "pet",
                  description: "Shows us your pets",
                },
                {
                  label: "STEM",
                  value: "stem",
                  description: "Where christopher talks to himself",
                },
                {
                  label: "Travel",
                  value: "travel",
                  description: "Discuss trips and show off",
                },
                {
                  label: "Trading",
                  value: "trading",
                  description: "How to be less broke",
                },
              ],
              placeholder: "Pick your clubs",
              min_values: 0,
              max_values: 15,
            },
          ],
        },
      ],
    });
  },
};
