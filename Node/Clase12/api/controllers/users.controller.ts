import { Request, Response } from "express"
import { BaseController } from "./base.controller"
import User from "../models/user.model";
import { createTokens } from "../services/tokens.service";

export class UsersController extends BaseController {
	constructor() {
		super(User)
	}

	async create(req: Request, res: Response) {
		const data = req.body

		const user = new User(data)
		const usuario = await user.save()

		const tokens = createTokens(usuario._id, usuario.rol)

		usuario.refreshToken = tokens.refreshToken
		await usuario.save()


		res
			.status(200)
			.json({
				status: 200,
				message: "Record created"
			})
	}

	async login(req: Request, res: Response) {
		const data = req.body

		const user = await User.findOne(data)

		if (user) {
			const refreshToken = user.refreshToken
			const tokens = createTokens(user._id, user.rol._id)

			res
				.json({ accessToken: tokens.accessToken, refreshToken: refreshToken })
		} else {
			res
				.status(404)
				.json({
					status: 404,
					message: "User not logged"
				})
		}


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