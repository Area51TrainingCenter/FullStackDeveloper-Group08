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
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { AutorizacionGuard } from './guards/autorizacion.guard';
import { DataSalvadaGuard } from './guards/data-salvada.guard';
import { CursoResolve } from './guards/curso.resolve';


const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{ path: "resumen", component: ResumenComponent },
	{
		path: "cursos", canActivateChild: [AutenticacionGuard], component: ListadoCursoComponent, children: [
			{ path: "nuevo", component: NuevoCursoComponent },
			{
				path: "edicion/:id",
				component: EdicionCursoComponent, canActivate: [AutorizacionGuard], canDeactivate: [DataSalvadaGuard],
				resolve: {
					dataCurso: CursoResolve
				}
			}
		]
	},

	/*	{ path: "cursos", component: ListadoCursoComponent },
		{ path: "cursos/nuevo", component: NuevoCursoComponent },
		{ path: "cursos/edicion/:id", component: EdicionCursoComponent },*/
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
	providers: [AutenticacionGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
