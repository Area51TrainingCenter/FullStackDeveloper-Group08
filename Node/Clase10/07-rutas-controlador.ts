import http = require("http")
import url = require("url")
import { manejador as manejadorUsuarios } from "./controladores/controlador"

const rutas = [
	{
		path: "usuarios", controlador: "listado", method: "get"
	},
	{
		path: "usuarios/edicion", controlador: "edicion", method: "get"
	},
	{
		path: "usuarios/edicion", controlador: "actualizar", method: "post"
	}
]

const servidor: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const parseado = url.parse(req.url, true)
	const ruta = parseado.pathname.replace(/^\/+|\/+$/g, "")
	const method = req.method.toLowerCase()

	let rutaEncontrada

	for (let ind = 0; ind < rutas.length; ind++) {
		if (rutas[ind].path == ruta && rutas[ind].method == method) {
			rutaEncontrada = rutas[ind]
			break
		}
	}

	if (rutaEncontrada) {
		return manejadorUsuarios[rutaEncontrada.controlador](req, res)
	}
	res.statusCode = 404
	res.end("Ruta no encontrada")

})

servidor.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))