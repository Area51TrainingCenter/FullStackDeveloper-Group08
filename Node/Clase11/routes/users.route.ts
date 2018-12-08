import { Request, Response } from "express"
import express = require("express")

const routerUsers = express.Router()

routerUsers.get("/", (req: Request, res: Response) => {
	/*res
		.status(200)
		.type("text/plain")
		.send("mensaje")*/
	res
		.type("text/html")
		.send(`
			<!doctype html>
			<html>
				<body>
					<form action="/users" method="post">
						<input type="text" name="nombre">
						<button>Enviar</button>
					</form>
				</body>
			</html>
		`)
})

routerUsers.post("/", (req: Request, res: Response) => {
	res
		.send("Datos guardados")
})

export { routerUsers }