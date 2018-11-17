import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { RouterModule } from '@angular/router';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NucleoModule,
		AlumnosModule,
		CursosModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
