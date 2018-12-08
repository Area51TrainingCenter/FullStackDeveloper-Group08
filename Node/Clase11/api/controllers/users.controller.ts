import { Request, Response } from "express"
import { BaseController } from "./base.controller"

export class UsersController extends BaseController {
	constructor() {
		super()
	}
}






const UsersController2 = {
	getUsers: (req: Request, res: Response) => {
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
	},
	insertUsers: (req: Request, res: Response) => {
		res
			.send("Datos guardados")
	}
}

export { UsersController2 }