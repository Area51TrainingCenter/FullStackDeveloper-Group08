import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from '../modelos/curso.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class CursosService {

	constructor(private http: HttpClient) { }

	listar(): Observable<ICurso[]> {
		return this.http.get<ICurso[]>(`${environment.apiRest}/cursos`)
	}

	detallar(idCurso: number): Observable<ICurso> {
		return this.http.get<ICurso>(`${environment.apiRest}/cursos/${idCurso}`)
	}

	insertar(curso: ICurso): Observable<ICurso> {
		return this.http.post<ICurso>(`${environment.apiRest}/cursos`, curso)
	}

	actualizar(curso: ICurso): Observable<ICurso> {
		return this.http.put<ICurso>(`${environment.apiRest}/cursos/${curso.idCurso}`, curso)
	}

	eliminar(idCurso: number): Observable<ICurso> {
		return this.http.delete<ICurso>(`${environment.apiRest}/cursos/${idCurso}`)
	}
}
