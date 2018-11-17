import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Route, PreloadAllModules } from "@angular/router"

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "alumnos", loadChildren: "../alumnos/alumnos.module#AlumnosModule" },
	{ path: "cursos", loadChildren: "../cursos/cursos.module#CursosModule" }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }