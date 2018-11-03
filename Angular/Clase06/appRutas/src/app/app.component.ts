import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	usuarioLogueado: boolean = false

	constructor(private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		this.autenticacionService.onCambioEstado
			.subscribe(
				(estado: boolean) => this.usuarioLogueado = estado
			)
	}
}
