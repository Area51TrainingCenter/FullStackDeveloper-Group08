// Importaciones
import { Application } from "express"
import express = require("express")
import { handlersErrors } from "./handlers/errors.handler";
import { routerUsers } from "./routes/users.route";
import { routerIndex } from "./routes/index.route";
import bodyParser = require("body-parser")
import mongoose = require("mongoose")
import { routerRoles } from "./routes/roles.route";

//Definiciones y declaraciones
const dotenv = require("dotenv")
dotenv.config({ path: "./variables.env" })

const app: Application = express()

//Conexion a Mongo
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log(error))

//Importar modelos
require("./api/models/user.model")
require("./api/models/rol.model")

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
app.use("/", routerIndex)
app.use("/users", routerUsers)
app.use("/roles", routerRoles)

//Middlewares de Errores
app.use(handlersErrors.notFound)
app.use(handlersErrors.general)

//Servidor
app.listen(process.env.PORT, () => {
	console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`)
})