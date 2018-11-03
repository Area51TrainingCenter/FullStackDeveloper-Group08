import { Injectable } from '@angular/core';
import { ICurso } from '../modelos/curso.interface';
import { Observable, Observer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CursoService {

	data: ICurso[] = []

	constructor() { }

	listar(): Observable<ICurso[]> {
		return Observable.create(
			(observador: Observer<ICurso[]>) => {
				setTimeout(() => {
					observador.next(this.data)
				}, 500)
			}
		)
	}

	insertar(curso: ICurso): Observable<boolean> {
		this.data.push(curso)

		return Observable.create(
			(observador: Observer<boolean>) => {
				setTimeout(() => {
					observador.next(true)
				}, 500)
			}
		)
	}
	eliminar() { }
	actualizar() { }
	detallar() { }
}
