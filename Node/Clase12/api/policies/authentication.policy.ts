import { Request, Response, NextFunction } from "express"
import { decodificarAccessToken } from "../services/tokens.service";

const authentication = (req: Request, res: Response, next: NextFunction) => {
	if (req.headers["authorization"]) {
		const cabecera = req.headers["authorization"].toString()

		const accessToken = cabecera.split(" ")[1]

		decodificarAccessToken(accessToken)
			.then(
				(data: any) => {
					res.locals._id = data._id
					res.locals.rol = data.rol
					next()
				},
				(error: any) => {
					res
						.status(error.status)
						.json({ message: error.message })
				}
			)
	} else {
		res
			.status(409)
			.json({
				status: 409,
				message: "User is not logged"
			})
	}
}

export { authentication }