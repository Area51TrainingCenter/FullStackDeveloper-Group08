import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';

const routes: Routes = [
	{ path: "", component: ListadoAlumnosComponent },
	{ path: "edicion/:id", component: EdicionAlumnoComponent },
	{ path: "nuevo", component: NuevoAlumnoComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AlumnosRoutingModule { }
