import fs = require("fs")

const lectura = fs.createReadStream("./lectura.txt", { encoding: "utf-8" })

const escritura = fs.createWriteStream("./escritura.txt", { encoding: "utf-8" })

/*lectura.on("data", chunck => {
	console.log("lectura de pedazo")
	escritura.write(chunck)
})

lectura.on("end", () => {
	console.log("fin de lectura y escritura")
})*/

lectura.pipe(escritura)