import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";
import { IUsuario } from "./usuario.interface";

@Injectable({
	providedIn: "root"
})
export class SeguridadService {
	constructor(private http: HttpClient, private ruteador: Router) { }

	private usuarioLogueado: IUsuario;

	onCambioEstado: Subject<boolean> = new Subject<boolean>();
	onErrorLogin: Subject<string> = new Subject<string>()

	estaLogueado() {
		if (!localStorage.getItem("usuarioLogueado")) {
			//this.logout()
		} else if (!this.usuarioLogueado) {
			this.usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
		}
		return localStorage.getItem("usuarioLogueado") ? true : false;
	}

	login(usuario: IUsuario) {
		this.http.post(`${environment.rutaAPI}/app/usuario/login`, usuario)
			.subscribe(
				(respuesta: any) => {
					this.usuarioLogueado = respuesta.resultado
					localStorage.setItem("usuarioLogueado", JSON.stringify(this.usuarioLogueado))
					this.onCambioEstado.next(true);
					this.ruteador.navigate(["/resumen"])
				},
				(error: any) => {
					this.onErrorLogin.next(error)
				}
			)
	}

	logout() {
		this.usuarioLogueado = undefined;
		localStorage.clear();
		this.onCambioEstado.next(false);
		this.ruteador.navigate([""])
	}

	listar() {
		this.http.get(`${environment.rutaAPI}/app/usuario`)
			.subscribe(respuesta => console.log(respuesta), error => console.log(error))
	}

	obtenerNuevoToken(refreshToken: string): Observable<any> {
		return this.http.post(`${environment.rutaAPI}/app/usuario/access-token`, { refreshToken })
	}

	datoUsuario(campo: string) {
		const datos = JSON.parse(localStorage.getItem("usuarioLogueado"))
		return datos[campo]
	}

	actualizarDatosUsuario(usuario: IUsuario) {
		const datos = new FormData()

		datos.append("nombreCompleto", usuario.nombreCompleto)
		if (usuario.contrasena && usuario.contrasena.trim() != "") {
			datos.append("contrasena", usuario.contrasena)
		}

		if (usuario.foto) datos.append("foto", usuario.foto)


		this.http.put(`${environment.rutaAPI}/app/usuario/actualizar`, datos)
			.subscribe(
				(resp: any) => {
					const usuarioLogueado: any = JSON.parse(localStorage.getItem("usuarioLogueado"))
					usuarioLogueado.nombreCompleto = usuario.nombreCompleto
					usuarioLogueado.foto = resp.foto

					localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))

					this.onCambioEstado.next(true)
				},
				error => console.log(error)
			)
	}
}