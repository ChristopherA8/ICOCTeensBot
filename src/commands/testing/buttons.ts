module.exports = {
  name: "buttons",
  permissions: 9,
  execute(msg) {
    msg.channel.send({
      content: ":)",
      components: [
        {
          type: 1,
          components: [
            {
              type: 3,
              custom_id: "class_select_1",
              options: [
                {
                  label: "Rogue",
                  value: "rogue",
                  description: "Sneak n stab",
                  emoji: {
                    name: "rogue",
                    id: "625891304148303894",
                  },
                },
              ],
              placeholder: "Choose a class",
              min_values: 1,
              max_values: 1,
            },
          ],
        },
      ],
    });
  },
};
