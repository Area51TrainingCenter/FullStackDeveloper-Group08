import { BaseController } from "./base.controller"
import Rol from "../models/rol.model";


export class RolesController extends BaseController {
	constructor() {
		super(Rol)
	}
}