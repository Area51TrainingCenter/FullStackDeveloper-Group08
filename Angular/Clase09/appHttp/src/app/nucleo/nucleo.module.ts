import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [CabeceraComponent, LoginComponent]
})
export class NucleoModule { }
