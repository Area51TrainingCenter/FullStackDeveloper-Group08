import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
	imports: [
		CommonModule,
		NucleoRoutingModule
	],
	declarations: [LoginComponent, CabeceraComponent],
	exports: [NucleoRoutingModule, CabeceraComponent]
})
export class NucleoModule { }
