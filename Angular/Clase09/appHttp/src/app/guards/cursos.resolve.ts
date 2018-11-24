import { Resolve, ActivatedRouteSnapshot } from "@angular/router"
import { ICurso } from "../modelos/curso.interface"
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CursosService } from "../servicios/cursos.service"

@Injectable({
	providedIn: "root"
})
export class CursoResolve implements Resolve<ICurso> {

	constructor(private cursosService: CursosService) { }

	resolve(rutaActiva: ActivatedRouteSnapshot): Observable<ICurso> | Promise<ICurso> | ICurso {
		return this.cursosService.detallar(+rutaActiva.paramMap.get("id"))
	}

}