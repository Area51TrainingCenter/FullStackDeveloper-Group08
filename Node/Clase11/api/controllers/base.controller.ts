import { Request, Response } from "express"

export class BaseController {
	constructor() {
		this.get = this.get.bind(this)
		this.create = this.create.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async get(req: Request, res: Response) {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error("Ocurrió un error en la base de datos"))
				/*resolve([
					{ username: "shidalgo" },
					{ username: "pneira" },
					{ username: "mveliz" }
				])*/
			}, 1500)
		})

		const results = await promesa

		res
			.json({
				status: 200,
				results
			})

		/*promesa
			.then(results => {
				res
					.json({
						status: 200,
						results
					})
			})*/

	}

	create(req: Request, res: Response) {
		res.send(req.body.photo)
	}

	update(req: Request, res: Response) { }

	delete(req: Request, res: Response) { }
}