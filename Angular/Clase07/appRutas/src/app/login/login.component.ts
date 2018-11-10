import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private autenticacionService: AutenticacionService, private ruteador: Router) {

	}

	ngOnInit() {
		setTimeout(() => {
			this.autenticacionService.logout()
		})
	}

	ingresar() {



		this.autenticacionService.login()
			.subscribe(
				(estado: boolean) => {
					if (estado) {
						this.autenticacionService.onCambioEstado.next(estado)
						localStorage.setItem("usuarioLogueado", "si")
						this.ruteador.navigate(["resumen"])
					}
				}
			)

	}

}
