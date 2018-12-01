import http = require("http")
import url = require("url")
//import qs = require("querystring")

const rutas = [
	{ path: "bienvenida", contentType: "html", respuesta: "<h1>Bienvenido</h1>" },
	{ path: "usuarios/listado", contentType: "json", respuesta: [{ nombre: "Alberto" }] }
]

const servidor: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const parseado = url.parse(req.url, true)
	res.statusCode = 200
	const pathname = parseado["pathname"]
	const pathSinSlash = pathname.replace(/^\/+|\/+$/g, "")

	//let encontrada: boolean = false

	for (let ind = 0; ind < rutas.length; ind++) {
		if (pathSinSlash == rutas[ind].path) {
			if (rutas[ind].contentType == "json") {
				res.setHeader("content-type", "application/json")
				return res.end(JSON.stringify(rutas[ind].respuesta))
			} else {
				res.setHeader("content-type", `text/${rutas[ind].contentType}`)
				return res.end(rutas[ind].respuesta)
			}
			//encontrada = true
			//break
		}
	}

	//if (!encontrada) {
	res.setHeader("content-type", "text/plain")
	res.end("Ruta no encontrada")
	//}

	//console.log(pathSinSlash)

	//res.setHeader("content-type", "application/json")
	//res.end(req.url)
	//res.end(JSON.stringify(parseado))
})

servidor.listen(3000, () => {
	console.log("Servidor ejecutándose en el puerto 3000")
})