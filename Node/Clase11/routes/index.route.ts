import { Request, Response } from "express"
import express = require("express")
import path = require("path")

const routerIndex = express.Router()

routerIndex.get("/", (req: Request, res: Response) => {
	res
		.sendFile(path.join(__dirname, "../public/index.html"))
})

export { routerIndex }