// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import { handlersErrors } from "./handlers/errors.handler";
import { routerUsers } from "./routes/users.route";
import { routerIndex } from "./routes/index.route";

//Definiciones y declaraciones
const app: Application = express()

//Rutas
app.use("/", routerIndex)
app.use("/users", routerUsers)

//Middlewares de Errores
app.use(handlersErrors.notFound)
app.use(handlersErrors.general)

//Servidor
app.listen(3000, () => {
	console.log(`Servidor ejecutándose en el puerto 3000`)
})