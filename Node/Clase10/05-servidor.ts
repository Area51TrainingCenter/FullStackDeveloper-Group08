import http = require("http")

const servidor: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.statusCode = 200
	res.setHeader("content-type", "application/json")
	//res.setHeader("content-type", "text/html")
	//res.setHeader("content-type", "text/plain")
	//res.writeHead(200, { "content-type": "text/plain" })
	//res.write("Mi nombre")
	//res.write("es Sergio")
	//res.end("Mi nombre es <strong>Sergio</strong> y mi apellido es <em>Hidalgo</em>")

	res.end(JSON.stringify([
		{ nombre: "Sergio" },
		{ nombre: "Andrea" },
		{ nombre: "Mónica" }
	]))
})

servidor.listen(3000)
console.log("Servidor ejecutándose")