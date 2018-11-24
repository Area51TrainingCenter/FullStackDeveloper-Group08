import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	grupo: FormGroup

	constructor(private ruteador: Router) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	ingresar() {
		this.ruteador.navigate(["cursos"])
	}

}
