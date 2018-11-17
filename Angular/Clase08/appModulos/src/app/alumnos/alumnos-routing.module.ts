import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router"
import { ListadoAlumnosComponent } from "./listado-alumnos/listado-alumnos.component";

const rutas: Route[] = [
	{ path: "alumnos", component: ListadoAlumnosComponent }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [RouterModule]
})
export class AlumnosRoutingModule { }