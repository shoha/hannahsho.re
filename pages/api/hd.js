import { exec } from "child_process"
import { promisify } from "util"

const execPr = promisify(exec)

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case "GET":
      await get(req, res)
      break
    case "POST":
      await post(req, res)
      break
    default:
      res.statusCode = 404
      res.json({ error: "Method not supported" })
      break
  }
}

const get = async (_, res) => {
  const results = await execPr("./java/jdk-18.0.1/bin/java -version")
  res.statusCode = 200
  res.json(results)
}

const post = async (_, res) => {
  const results = await execPr(
    "./java/jdk-18.0.1/bin/java -jar hdcli.jar public/input.hdc public/format.hde public/output.xml"
  )

  res.statusCode = 200
  res.json(results)
}
