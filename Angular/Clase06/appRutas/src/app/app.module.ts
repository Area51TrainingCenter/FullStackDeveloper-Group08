import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { EdicionCursoComponent } from './edicion-curso/edicion-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';


const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "resumen", component: ResumenComponent },
	{ path: "cursos", component: ListadoCursoComponent },
	{ path: "cursos/nuevo", component: NuevoCursoComponent },
	{ path: "alumnos", component: ListadoAlumnoComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent,
		LoginComponent,
		ResumenComponent,
		ListadoCursoComponent,
		EdicionCursoComponent,
		NuevoCursoComponent,
		ListadoAlumnoComponent,
		EdicionAlumnoComponent,
		NuevoAlumnoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
