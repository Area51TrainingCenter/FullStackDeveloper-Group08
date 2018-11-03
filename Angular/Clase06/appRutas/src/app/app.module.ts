import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ResumenComponent } from './resumen/resumen.component';


const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "resumen", component: ResumenComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent,
		LoginComponent,
		ResumenComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
