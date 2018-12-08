// Importaciones
import { Application } from "express"
import express = require("express")
import { handlersErrors } from "./handlers/errors.handler";
import { routerUsers } from "./routes/users.route";
import { routerIndex } from "./routes/index.route";
import bodyParser = require("body-parser")

//Definiciones y declaraciones
const dotenv = require("dotenv")
dotenv.config({ path: "./variables.env" })

const app: Application = express()

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
app.use("/", routerIndex)
app.use("/users", routerUsers)

//Middlewares de Errores
app.use(handlersErrors.notFound)
app.use(handlersErrors.general)

//Servidor
app.listen(process.env.PORT, () => {
	console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`)
})