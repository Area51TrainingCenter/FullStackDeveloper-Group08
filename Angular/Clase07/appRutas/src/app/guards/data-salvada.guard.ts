import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivate } from '../ideactivate.interface';
import { EdicionCursoComponent } from '../edicion-curso/edicion-curso.component';

@Injectable({
	providedIn: 'root'
})
export class DataSalvadaGuard implements CanDeactivate<IDeactivate> {

	canDeactivate(componente: IDeactivate): boolean {
		if (componente.canDeactivateComponente()) {
			if (confirm("Hay data sin salvar, ¿quieres salvarla?")) {
				componente.guardarDeactivateComponente()
				return false
			}
			return true
		}

		return true
	}

}
