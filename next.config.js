const { exec } = require("child_process")
const { promisify } = require("util")

module.exports = async (phase, { defaultConfig }) => {
  const execPr = await promisify(exec)
  await execPr("./startup.sh")
  return defaultConfig
}
