import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "reducirTexto"
})
export class MiReducidor implements PipeTransform {
	transform(valor: string, limite: number, opciones: string) {
		if (valor.length > limite) return valor.substring(0, limite) + " " + opciones

		return valor

	}
}