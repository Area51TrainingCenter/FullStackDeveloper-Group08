import { Request, Response } from "express"
import path = require("path")

const IndexController = {
	home: (req: Request, res: Response) => {
		res
			.sendFile(path.join(__dirname, "../../public/index.html"))
	}
}

export { IndexController }