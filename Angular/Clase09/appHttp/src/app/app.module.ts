import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NucleoModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
