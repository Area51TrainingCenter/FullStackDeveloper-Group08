import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../servicios/curso.service';
import { ICurso } from '../modelos/curso.interface';
import { IDeactivate } from '../ideactivate.interface';
import { CursoResolve } from '../guards/curso.resolve';

@Component({
	selector: 'app-edicion-curso',
	templateUrl: './edicion-curso.component.html',
	styleUrls: ['./edicion-curso.component.css']
})
export class EdicionCursoComponent implements OnInit, IDeactivate {

	id: number
	curso: ICurso = {}
	cursoOriginal: ICurso

	constructor(private rutaActiva: ActivatedRoute, private cursoService: CursoService, private cursoResolve: CursoResolve, private ruteador: Router) { }

	canDeactivateComponente(): boolean {
		if (this.curso.titulo == this.cursoOriginal.titulo) {
			return false
		}

		return true
	}

	guardarDeactivateComponente() {
		this.modificar()
	}

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.paramMap.get("id")

		console.log(this.rutaActiva.snapshot.data["dataCurso"])

		this.curso = this.cursoResolve.curso
		this.cursoOriginal = Object.assign({}, this.curso)

		/*this.curso = this.rutaActiva.snapshot.data["dataCurso"]
		this.cursoOriginal = this.rutaActiva.snapshot.data["dataCurso"]*/



		/*this.cursoService.detallar(this.id)
			.subscribe(
				(registro: ICurso) => {
					this.curso = registro
					this.cursoOriginal = Object.assign({}, this.curso)
				}
			)*/
	}

	modificar() {
		this.cursoService.actualizar(this.curso, this.id)
			.subscribe(
				() => {
					this.cursoOriginal = Object.assign({}, this.curso)
					this.ruteador.navigate(["cursos"])
				}
			)
	}

}
