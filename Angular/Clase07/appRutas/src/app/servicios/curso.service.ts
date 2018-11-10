import { Injectable } from '@angular/core';
import { ICurso } from '../modelos/curso.interface';
import { Observable, Observer, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
	eliminar(indice: number): Observable<any> {
		this.data.splice(indice, 1)

		return Observable.create(
			(observador: Observer<any>) => {
				setTimeout(() => {
					observador.next(0)
				}, 500)
			}
		)
	}
	actualizar(curso: ICurso, indice: number): Observable<any> {
		this.data[indice] = curso

		return Observable.create(
			(observador: Observer<any>) => {
				setTimeout(() => {
					observador.next(true)
				}, 500)
			}
		)
	}

	detallar(indice: number): Observable<ICurso> {
		return Observable.create(
			(observador: Observer<ICurso>) => {
				setTimeout(() => {
					const item = Object.assign({}, this.data[indice])
					observador.next(item)
				}, 10000)
			}
		)
	}

	listarPersonas(): Observable<Array<string>> {
		return of(["Sergio", "Pedro", "Juana"])
			.pipe(
				delay(2000)
			)
	}

	listarFechas(): Observable<Array<string>> {
		return of(["ene-18", "feb-18", "mar-18"])
			.pipe(
				delay(13000)
			)
	}
}
