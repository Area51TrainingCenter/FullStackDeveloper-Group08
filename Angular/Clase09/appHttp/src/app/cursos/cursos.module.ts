import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { EdicionCursoComponent } from './edicion-curso/edicion-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [ListadoCursosComponent, EdicionCursoComponent, NuevoCursoComponent]
})
export class CursosModule { }
