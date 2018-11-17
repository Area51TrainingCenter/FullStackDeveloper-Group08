import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router"
import { ListadoCursosComponent } from "./listado-cursos/listado-cursos.component";


const rutas: Route[] = [
	{ path: "cursos", component: ListadoCursosComponent }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [RouterModule]
})
export class CursosRoutingModule { }