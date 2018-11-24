import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [
		CommonModule,
		NucleoRoutingModule,
		ReactiveFormsModule
	],
	declarations: [CabeceraComponent, LoginComponent],
	exports: [
		CabeceraComponent
	]
})
export class NucleoModule { }
