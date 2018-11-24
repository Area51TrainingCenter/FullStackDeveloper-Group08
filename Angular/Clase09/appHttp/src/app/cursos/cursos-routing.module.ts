import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { EdicionCursoComponent } from './edicion-curso/edicion-curso.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

const routes: Routes = [
	{ path: "", component: ListadoCursosComponent },
	{ path: "edicion/:id", component: EdicionCursoComponent },
	{ path: "nuevo", component: NuevoCursoComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CursosRoutingModule { }
