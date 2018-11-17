import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router"
import { ListadoAlumnosComponent } from "./listado-alumnos/listado-alumnos.component";

const rutas: Route[] = [
	{ path: "", component: ListadoAlumnosComponent }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forChild(rutas)
	],
	exports: [RouterModule]
})
export class AlumnosRoutingModule { }