import { Injectable } from "@angular/core"
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ICurso } from "../modelos/curso.interface";
import { CursoService } from "../servicios/curso.service";

@Injectable({
	providedIn: 'root'
})
export class CursoResolve implements Resolve<any> {
	rutaActiva
	curso: ICurso
	personas: Array<string>
	fechas: Array<string>

	constructor(private cursoService: CursoService) { }

	resolve(ruta: ActivatedRouteSnapshot): Promise<any> {
		this.rutaActiva = ruta

		const p1 = this.promesaDetallar()
		const p2 = this.promesaListarPersonas()
		const p3 = this.promesaListarFechas()

		return new Promise((res, rej) => {
			Promise.all([p1, p2, p3])
				.then(resultados => {
					this.curso = resultados[0]
					this.personas = resultados[1]
					this.fechas = resultados[2]
					res(resultados)
				})
		})


	}

	promesaDetallar(): Promise<ICurso> {
		const id = +this.rutaActiva.paramMap.get("id")

		return new Promise((resol, reject) => {
			this.cursoService.detallar(id)
				.subscribe(
					(datar: ICurso) => resol(datar)
				)
		})
	}

	promesaListarPersonas(): Promise<Array<string>> {
		return new Promise((resol, reject) => {
			this.cursoService.listarPersonas()
				.subscribe(
					(datar: Array<string>) => resol(datar)
				)
		})
	}

	promesaListarFechas(): Promise<Array<string>> {
		return new Promise((resol, reject) => {
			this.cursoService.listarFechas()
				.subscribe(
					(datar: Array<string>) => resol(datar)
				)
		})
	}

}