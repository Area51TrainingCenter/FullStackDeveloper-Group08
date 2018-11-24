import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "alumnos", loadChildren: "../alumnos/alumnos.module#AlumnosModule" },
	{ path: "cursos", loadChildren: "../cursos/cursos.module#CursosModule" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
