import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ICurso } from "../modelos/curso.interface";
import { CursoService } from "../servicios/curso.service";

@Injectable({
	providedIn: 'root'
})
export class CursoResolve implements Resolve<ICurso> {

	constructor(private cursoService: CursoService) { }

	resolve(ruta: ActivatedRouteSnapshot): Promise<ICurso> {
		const id = +ruta.paramMap.get("id")

		return new Promise((resol, reject) => {
			this.cursoService.detallar(id)
				.subscribe(
					(datar: ICurso) => resol(datar)
				)
		})
	}
}