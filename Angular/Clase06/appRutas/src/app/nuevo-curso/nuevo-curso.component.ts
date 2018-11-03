import { Component, OnInit } from '@angular/core';
import { ICurso } from '../modelos/curso.interface';
import { CursoService } from '../servicios/curso.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nuevo-curso',
	templateUrl: './nuevo-curso.component.html',
	styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

	curso: ICurso = {}

	constructor(private cursoService: CursoService, private ruteador: Router) { }

	ngOnInit() {
	}

	agregar() {
		this.curso.estado = true
		this.cursoService.insertar(this.curso)
			.subscribe(
				respuesta => this.ruteador.navigate(["cursos"])
			)
	}

}
