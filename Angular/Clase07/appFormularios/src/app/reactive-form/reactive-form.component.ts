import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

	grupoFormulario: FormGroup

	constructor() { }

	ngOnInit() {
		this.grupoFormulario = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, Validators.email, this.validadorCorreo]),
			contrasena: new FormControl(null, Validators.required),
			confirmacion: new FormControl(null, [Validators.required, this.validarContrasena])
		})
	}

	validadorCorreo(form: FormControl): { [s: string]: boolean } {
		if (!form.value) return null

		const valorIngresado = form.value
		const partesCorreo = valorIngresado.split("@")

		if (partesCorreo[1]) {
			if (partesCorreo[1].toLowerCase() == "area51.pe") {
				return null
			} else {
				return { correoInvalido: true }
			}
		}

		return null
	}

	validarContrasena(control: AbstractControl): { [s: string]: boolean } {
		if (!control.parent) return null

		const contrasena = control.parent.get("contrasena")

		const confirmacion = control.parent.get("confirmacion")

		if (!contrasena.value || !confirmacion.value) return null

		if (confirmacion.value == "") return null

		if (contrasena.value.trim() != confirmacion.value.trim()) {
			return { confirmacionInvalida: true }
		}

		return null
	}

}
