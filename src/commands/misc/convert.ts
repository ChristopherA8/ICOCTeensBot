module.exports = {
  name: "convert",
  permissions: 1,
  async execute(msg, args) {
    const { cloudConvertToken } = require("../../../config.json");

    if (!args[0]) {
      msg.reply(`Missing file extension to convert to`);
      return;
    } else if (!msg.attachments.first()) {
      msg.reply(`No file supplied`);
      return;
    }

    const CloudConvert = require("cloudconvert");
    const cloudConvert = new CloudConvert(cloudConvertToken);

    let job = await cloudConvert.jobs.create({
      tasks: {
        "import-my-file": {
          operation: "import/url",
          url: msg.attachments.first().url,
          filename: msg.attachments.first().name,
        },
        "convert-my-file": {
          operation: "convert",
          input: "import-my-file",
          output_format: args[0],
          some_other_option: "value",
        },
        "export-my-file": {
          operation: "export/url",
          input: "convert-my-file",
        },
      },
    });

    job = await cloudConvert.jobs.wait(job.id);

    const exportTask = job.tasks.filter(
      (task) => task.operation === "export/url" && task.status === "finished"
    )[0];
    const file = exportTask.result.files[0];

    msg.reply(`Converted File\n${file.url}`);
  },
};
