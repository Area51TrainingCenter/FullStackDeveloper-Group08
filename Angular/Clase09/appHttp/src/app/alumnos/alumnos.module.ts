import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ],
  declarations: [ListadoAlumnosComponent, EdicionAlumnoComponent, NuevoAlumnoComponent]
})
export class AlumnosModule { }
