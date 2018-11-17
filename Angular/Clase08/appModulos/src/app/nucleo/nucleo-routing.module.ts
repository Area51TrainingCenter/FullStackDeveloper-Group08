import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router"

const rutas: Route[] = [
	{ path: "", component: LoginComponent }
]

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(rutas)
	],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }