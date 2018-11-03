import { Component, OnInit } from '@angular/core';
import { ICurso } from '../modelos/curso.interface';
import { CursoService } from '../servicios/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-nuevo-curso',
	templateUrl: './nuevo-curso.component.html',
	styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

	curso: ICurso = {}
	titulo: string
	fragmento: string

	constructor(private cursoService: CursoService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		this.titulo = this.rutaActiva.snapshot.queryParamMap.get("tit")
		this.fragmento = this.rutaActiva.snapshot.fragment
	}

	agregar() {
		this.curso.estado = true
		this.cursoService.insertar(this.curso)
			.subscribe(
				respuesta => this.ruteador.navigate(["cursos"])
			)
	}

}
