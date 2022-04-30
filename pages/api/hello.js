import { exec } from "child_process"
import { promisify } from "util"

export default async (req, res) => {
  const execPr = promisify(exec)

  const results = await execPr("./java/jdk-18.0.1/bin/java -version")

  res.statusCode = 200
  res.json(results)
}
