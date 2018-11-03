import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../servicios/curso.service';
import { ICurso } from '../modelos/curso.interface';

@Component({
	selector: 'app-edicion-curso',
	templateUrl: './edicion-curso.component.html',
	styleUrls: ['./edicion-curso.component.css']
})
export class EdicionCursoComponent implements OnInit {

	id: number
	curso: ICurso = {}

	constructor(private rutaActiva: ActivatedRoute, private cursoService: CursoService, private ruteador: Router) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.paramMap.get("id")

		this.cursoService.detallar(this.id)
			.subscribe(
				(registro: ICurso) => this.curso = registro
			)
	}

	modificar() {
		this.cursoService.actualizar(this.curso, this.id)
			.subscribe(
				() => this.ruteador.navigate(["cursos"])
			)
	}

}
