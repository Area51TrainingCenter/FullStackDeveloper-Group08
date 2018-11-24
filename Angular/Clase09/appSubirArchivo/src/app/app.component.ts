import { Component, ViewChild, ElementRef } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
	[].forEach.call(this, callback)
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	imagen: any
	imagenes: any[] = []

	@ViewChild("archivo") archivo: ElementRef

	abrirVentana() {
		this.archivo.nativeElement.click()
	}

	subir(evt) {
		const archivo = evt.target.files[0]
		if ((archivo.type as string).startsWith("image/")) {
			const fr: FileReader = new FileReader()
			fr.onloadend = (respuesta) => {
				const data = (respuesta.target as FileReader).result
				this.imagen = data
			}
			fr.readAsDataURL(archivo)
		} else {
			alert("Solo se permiten imágenes")
		}
	}

	subirArchivos(evt) {
		evt.target.files.forEach(file => {
			const fr: FileReader = new FileReader()
			fr.onloadend = (respuesta) => {
				const data = (respuesta.target as FileReader).result
				this.imagenes.push(data)
			}
			fr.readAsDataURL(file)
		})
	}
}
