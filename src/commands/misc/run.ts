module.exports = {
  name: "run",
  permissions: 9,
  execute(msg, args) {
    const { exec, spawn } = require("child_process");

    exec(args.join(" "), (err, res) => {
      if (err)
        return msg.channel.send({
          content: "```bash\n" + err + "\n```",
        });
      msg.channel.send({ content: "```bash\n" + res.slice(0, 1800) + "\n```" });
    });

    /*

    if (args < 1) return msg.channel.send("Missing command");

    console.log(args);

    let argsList = [...args];

    console.log(argsList);

    let command;

    if (msg.content.includes("|")) {
      let newArgs = args.join(" ").split("|");
      for (let argz in newArgs) {
        let argsList = [...argz];
        if (argz.length >= 2) {
          argsList.splice(0, 1);
          command = spawn(argz[0], [...argsList]);
          console.log("if");
        } else {
          command = spawn(argz[0]);
          console.log("else");
        }
      }
    } else {
      if (args.length >= 2) {
        argsList.splice(0, 1);
        command = spawn(args[0], [...argsList]);
        console.log("if");
      } else {
        command = spawn(args[0]);
        console.log("else");
      }
    }

    console.log(argsList);

    command.stdout.on("data", (data) => {
      // console.log(`stdout: ${data}`);
      msg.channel.send(`\`\`\`bash\n${data.slice(0, 1900)}\`\`\``);
    });

    command.stderr.on("data", (data) => {
      // console.log(`stderr: ${data}`);
      msg.channel.send(`\`\`\`bash\n${data.slice(0, 1900)}\`\`\``);
    });

    command.on("error", (error) => {
      // console.log(`error: ${error.message}`);
      msg.channel.send(`\`\`\`bash\n${error}\`\`\``);
    });

    command.on("close", (code) => {
      // console.log(`child process exited with code ${code}`);
    });
    */
  },
};
