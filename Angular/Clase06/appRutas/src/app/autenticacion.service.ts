import { Injectable } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { pluck } from "rxjs/operators"

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	onCambioEstado: Subject<boolean> = new Subject<boolean>()

	constructor() { }

	login(): Observable<{}> {
		return of({ status: 200, results: true })
			.pipe(
				pluck("results")
			)
		//this.onCambioEstado.next(true)
	}

	logout() {
		this.onCambioEstado.next(false)
	}

}
