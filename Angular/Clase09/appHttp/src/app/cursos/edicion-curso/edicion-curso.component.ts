import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursosService } from '../../servicios/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICurso } from '../../modelos/curso.interface';

@Component({
	selector: 'app-edicion-curso',
	templateUrl: './edicion-curso.component.html',
	styleUrls: ['./edicion-curso.component.css']
})
export class EdicionCursoComponent implements OnInit {

	grupo: FormGroup
	curso: ICurso

	constructor(private cursosService: CursosService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		this.curso = this.rutaActiva.snapshot.data.curso

		this.grupo = new FormGroup({
			idCurso: new FormControl(this.curso.idCurso),
			titulo: new FormControl(this.curso.titulo, Validators.required)
		})
	}

	actualizar() {
		const curso: ICurso = this.grupo.getRawValue()
		this.cursosService.actualizar(curso)
			.subscribe(
				() => this.ruteador.navigate(["/cursos"])
			)
	}

}
