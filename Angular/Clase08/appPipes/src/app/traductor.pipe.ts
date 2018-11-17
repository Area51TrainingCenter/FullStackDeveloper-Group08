import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

	idiomas = {
		es: {
			bienvenida: "Bienvenido",
			datos: {
				usuario: "Usuario",
				contrasena: "Contraseña"
			}
		},
		en: {
			bienvenida: "Welcome",
			datos: {
				usuario: "Username",
				contrasena: "Password"
			}
		}
	}

	transform(prop: string, idioma: string): any {
		const lista = prop.split(".")
		let el = this.idiomas[idioma]

		lista.forEach(item => {
			el = el[item]
		})

		return el;
	}

}
