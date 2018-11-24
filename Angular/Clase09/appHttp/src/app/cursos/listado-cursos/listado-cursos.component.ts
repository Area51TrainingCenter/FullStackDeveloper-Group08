import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { ICurso } from '../../modelos/curso.interface';

@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

	cursos: ICurso[] = []

	constructor(private cursosService: CursosService) { }

	ngOnInit() {
		this.cursosService.listar()
			.subscribe(
				(lista: ICurso[]) => this.cursos = lista
			)
	}

}
