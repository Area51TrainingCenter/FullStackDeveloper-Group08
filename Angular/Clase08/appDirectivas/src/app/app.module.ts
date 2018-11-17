import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDirective } from './simple.directive';
import { HoverDirective } from './hover.directive';
import { DistritosDirective } from './distritos.directive';
import { ArchivoDirective } from './archivo.directive';

@NgModule({
	declarations: [
		AppComponent,
		SimpleDirective,
		HoverDirective,
		DistritosDirective,
		ArchivoDirective
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
