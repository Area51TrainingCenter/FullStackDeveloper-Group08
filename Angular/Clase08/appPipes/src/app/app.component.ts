import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	fecha = new Date()
	filtro: string = ""
	seleccion: string = "sinopsis"

	idioma: string = "es"

	libros: Array<{}> = [
		{ titulo: "Los gallinazos sin plumas", autor: "Julio Ramón Ribeyro", sinopsis: "Narra la historia de la gente que se gana la vida con la basura", anno: 1950 },
		{ titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", sinopsis: "Narra una de muchas historias que se desarrollaron dentro del colegio militar Leoncio Prado", anno: 1970 },
		{ titulo: "El Sexto", autor: "José María Arguedas", sinopsis: "Describe la tristemente célebre cárcel llamada el Sexto", anno: 1975 },
		{ titulo: "El Perfume", autor: "Patrick Suskind", sinopsis: "Cuenta la historia de un asesino que mataba mujeres para destilar su grasa natural y obtener perfumes", anno: 1940 }
	]

	librosTexto

	ngOnInit() {
		this.librosTexto = of(["Angular", "Node", "Mongo"])
			.pipe(
				delay(6000)
			)
	}
}
