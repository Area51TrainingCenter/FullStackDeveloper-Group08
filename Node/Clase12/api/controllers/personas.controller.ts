import { BaseController } from "./base.controller"
import Persona from "../models/personas.model";
import { Request, Response } from "express"


export class RolesController extends BaseController {
	constructor() {
		super(Persona)
	}

	async listaFiltrada(req: Request, res: Response) {
		const lista = await Persona.listaFiltradaPorNacionalidadYSexo("DK", "male")

		res.json(lista)
	}
}