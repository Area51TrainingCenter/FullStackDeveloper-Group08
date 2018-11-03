import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild {

	constructor(private ruteador: Router) { }

	canActivate() {
		if (localStorage.getItem("usuarioLogueado")) {
			return true
		}

		this.ruteador.navigate([""])
		return false
		//return localStorage.getItem("usuarioLogueado") ? true : false
	}

	canActivateChild() {
		return this.canActivate()
	}

}