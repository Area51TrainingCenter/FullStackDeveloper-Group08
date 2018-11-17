import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiReducidor } from './miReducidor.pipe';
import { FormsModule } from "@angular/forms";
import { FiltroPipe } from './filtro.pipe';
import { TraductorPipe } from './traductor.pipe'


@NgModule({
	declarations: [
		AppComponent,
		MiReducidor,
		FiltroPipe,
		TraductorPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
