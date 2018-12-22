import { Request, Response, NextFunction } from "express"

const authorization = (...roles) => {

	return (req: Request, res: Response, next: NextFunction) => {
		const rolUsuario = res.locals.rol

		if (roles.indexOf(rolUsuario) > -1) {
			next()
		} else {
			res
				.status(409)
				.json({
					status: 409,
					message: "It is forbidden"
				})
		}
	}
}

export { authorization }