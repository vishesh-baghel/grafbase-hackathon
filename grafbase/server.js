const { exec } = require("child_process");

function runFileWriter() {
  exec(
    "node /home/vishesh.baghel/Documents/workspace/personal-projects/grafbase-hands-on/grafbase/writeToSchema.js",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout on the console: ${stdout}`);
    }
  );
}

runFileWriter();
