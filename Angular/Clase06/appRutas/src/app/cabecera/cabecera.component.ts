import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	fecha = new Date()
	//usuarioLogueado: boolean = false

	constructor(private autenticacionService: AutenticacionService, private ruteador: Router) { }

	ngOnInit() {
		/*this.autenticacionService.onCambioEstado
			.subscribe(
				(estado: boolean) => this.usuarioLogueado = estado
			)*/
	}

	logout() {
		this.autenticacionService.logout()
		this.ruteador.navigate([""])
	}

}
