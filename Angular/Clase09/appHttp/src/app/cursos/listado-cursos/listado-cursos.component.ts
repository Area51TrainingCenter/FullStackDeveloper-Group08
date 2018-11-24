import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { ICurso } from '../../modelos/curso.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

	cursos: ICurso[] = []

	constructor(private cursosService: CursosService, private ruteador: Router) { }

	ngOnInit() {
		this.listar()
	}

	listar() {
		this.cursosService.listar()
			.subscribe(
				(lista: ICurso[]) => this.cursos = lista
			)
	}

	eliminar(idCurso: number) {
		if (confirm("¿Está seguro de eliminar?")) {
			this.cursosService.eliminar(idCurso)
				.subscribe(
					() => {
						this.listar()
					}
				)
		}
	}

	editar(idCurso: number) {
		this.ruteador.navigate(["/cursos", "edicion", idCurso])
	}

}
