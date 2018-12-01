import { Reloj } from "./reloj"

const reloj = new Reloj()
reloj.iniciar()
reloj.on("fecha actual", data => {
	console.log(data)
})

console.log("Esta es la última línea")