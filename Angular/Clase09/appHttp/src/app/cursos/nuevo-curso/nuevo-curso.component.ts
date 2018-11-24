import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICurso } from '../../modelos/curso.interface';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nuevo-curso',
	templateUrl: './nuevo-curso.component.html',
	styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

	grupo: FormGroup

	constructor(private cursosService: CursosService, private ruteador: Router) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			titulo: new FormControl(null, Validators.required)
		})
	}

	insertar() {
		const curso: ICurso = this.grupo.getRawValue()
		this.cursosService.insertar(curso)
			.subscribe(
				() => this.ruteador.navigate(["/cursos"])
			)
	}

}
