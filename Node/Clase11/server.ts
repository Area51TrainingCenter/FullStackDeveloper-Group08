// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")

interface IError extends Error {
	status?: number
}

//Definiciones y declaraciones
const app: Application = express()

//Rutas
app.get("/", (req: Request, res: Response) => {
	/*res.statusCode = 200
	res.setHeader("content-type", "text/plain")
	res.end("Mensaje")*/

	res
		.status(200)
		.type("text/plain")
		.send("mensaje")
})

//Middlewares
app.use((req: Request, res: Response, next: NextFunction) => {
	const error: IError = new Error("Ruta no definida")
	error.status = 404
	/*res
		.status(404)
		.send("Ruta no encontrada")*/
	next(error)
})


app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
	res
		.status(error.status)
		.json({
			name: error.name,
			message: error.message,
			stack: error.stack
		})
})

//Servidor
app.listen(3000, () => {
	console.log(`Servidor ejecutándose en el puerto 3000`)
})