import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router"
import { ListadoCursosComponent } from "./listado-cursos/listado-cursos.component";


const rutas: Route[] = [
	{ path: "", component: ListadoCursosComponent }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forChild(rutas)
	],
	exports: [RouterModule]
})
export class CursosRoutingModule { }