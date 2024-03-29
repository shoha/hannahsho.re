import { exec } from "child_process"
import * as fs from "fs/promises"
import NextCors from "nextjs-cors"
import { promisify } from "util"

const execPr = promisify(exec)

export default async (req, res) => {
  const { method } = req

  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin:
      process.env.NODE_ENV === "development"
        ? "*"
        : "https://champions.vercel.app",
    optionsSuccessStatus: 200,
  })

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

const get = async (req, res) => {
  await post(req, res)
}

const post = async (req, res) => {
  let inputName = "public/input.hdc"
  let inputFile

  if (req.body) {
    inputName = `tmp/in_${Date.now()}_${Math.ceil(
      Math.random() * 1000000
    ).toString()}`

    const encoding = req.body.indexOf("UTF-8") !== -1 ? "utf-8" : "utf16le"

    inputFile = fs.writeFile(inputName, req.body, { encoding })
  }

  const outputName = `tmp/out_${Date.now()}_${Math.ceil(
    Math.random() * 1000000
  ).toString()}`

  await execPr(
    `./java/jdk-18.0.1/bin/java -jar hdcli.jar ${inputName} public/format.hde ${outputName}`
  )

  const exportBuffer = await fs.readFile(outputName)

  res.statusCode = 200
  res.json({ body: exportBuffer.toString() })

  if (inputFile) {
    await fs.unlink(inputName)
  }

  await fs.unlink(outputName)
}
