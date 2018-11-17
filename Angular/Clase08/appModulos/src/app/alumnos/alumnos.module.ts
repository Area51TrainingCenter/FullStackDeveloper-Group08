import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';

@NgModule({
	imports: [
		CommonModule,
		AlumnosRoutingModule
	],
	declarations: [ListadoAlumnosComponent],
	exports: [AlumnosRoutingModule]
})
export class AlumnosModule { }
