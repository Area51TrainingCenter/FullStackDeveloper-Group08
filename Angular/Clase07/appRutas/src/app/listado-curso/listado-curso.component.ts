import { Component, OnInit } from '@angular/core';
import { CursoService } from '../servicios/curso.service';
import { ICurso } from '../modelos/curso.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listado-curso',
	templateUrl: './listado-curso.component.html',
	styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

	listaCursos: ICurso[]

	constructor(private cursoService: CursoService, private ruteador: Router) { }

	ngOnInit() {
		this.listar()
	}

	listar() {
		this.cursoService.listar()
			.subscribe(
				(datos: ICurso[]) => {
					console.table(datos)
					this.listaCursos = datos
				}
			)
	}

	nuevo() {
		this.ruteador.navigate(["cursos/nuevo"], {
			queryParams: { tit: "Nuevo Curso" },
			fragment: "admin"
		})
	}

	eliminar(indice: number) {
		if (confirm("¿Está seguro?")) {
			this.cursoService.eliminar(indice)
				.subscribe(
					() => this.listar()
				)
		}
	}

	editar(indice: number) {
		this.ruteador.navigate(["cursos/edicion", indice])
	}

}
