import http = require("http")

const manejador = {
	listado: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 200
		res.setHeader("content-type", "application/json")
		res.end(JSON.stringify([
			{ nombre: "Amelia" },
			{ nombre: "Jana" }
		]))
	},
	edicion: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 200
		res.setHeader("content-type", "text/html")
		res.end(
			`
			<form action="/usuarios/edicion" method="post">
				<input type="text" name="nombre" placeholder="Ingresa tu nombre">
				<br>
				<input type="text" name="apellido" placeholder="Ingresa tu apellido">
				<br>
				<button type="submit">Enviar</button>
			</form>
			`
		)
	},
	actualizar: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 302
		res.setHeader("Location", "/usuarios")
		res.end()
	}

}

export { manejador }