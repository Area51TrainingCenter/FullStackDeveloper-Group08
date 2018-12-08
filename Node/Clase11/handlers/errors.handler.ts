import { Request, Response, NextFunction } from "express"
import { IError } from "../interfaces/ierror.interface";

const handlersErrors = {
	notFound: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Ruta no definida")
		error.status = 404
		/*res
			.status(404)
			.send("Ruta no encontrada")*/
		next(error)
	},


	cacheo: (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
		return (rq: Request, rs: Response, nx: NextFunction) => {
			return ftn(rq, rs, nx).catch((error: IError) => {
				error.status = 500
				nx(error)
			})
		}
	},


	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		res
			.status(error.status)
			.json({
				name: error.name,
				message: error.message,
				stack: error.stack
			})
	}
}

export { handlersErrors }