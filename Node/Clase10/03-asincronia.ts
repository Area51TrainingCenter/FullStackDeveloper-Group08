import fs = require("fs")
//import * as fs from "fs"
//const fs = require("fs")

const archivo = fs.readFileSync("./lectura.txt", { encoding: "utf-8" })

//console.log("se ejecutó")
//console.log(archivo)

fs.readFile("./lectura.txt", { encoding: "utf-8" }, (err, data) => {
	if (err) {
		console.log("ocurrió un error")
	} else {
		console.log("Lectura de archivo")
		console.log(data)
	}
})

console.log("Fin")



