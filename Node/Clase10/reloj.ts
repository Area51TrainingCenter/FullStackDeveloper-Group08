import { EventEmitter } from "events";

export class Reloj extends EventEmitter {

	iniciar() {
		setInterval(() => {
			const fecha = new Date()
			this.emit("fecha actual", fecha.toTimeString())
		}, 1000)
	}
}

//export default Reloj
//export {Reloj}