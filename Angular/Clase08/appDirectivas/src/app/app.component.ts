import { Component } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
	[].forEach.call(this, callback)
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	aplicarClase: boolean = false

	imagen

	seleccion(archivos: FileList) {
		archivos["forEach"](archivo => {
			console.log(archivo)

			const lector: FileReader = new FileReader()

			lector.onload = e => {
				this.imagen = e.target["result"]
				console.log(e.target["result"])
			}

			lector.readAsDataURL(archivo)



		})
	}
}
