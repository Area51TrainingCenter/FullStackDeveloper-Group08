import { Request, Response } from "express"

export class BaseController {
	constructor(private model) {
		this.get = this.get.bind(this)
		this.create = this.create.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async get(req: Request, res: Response) {
		const results = await this.model.find()

		res
			.json({
				status: 200,
				results
			})
	}

	async create(req: Request, res: Response) {
		const data = req.body

		const user = new this.model(data)
		await user.save()

		res
			.status(200)
			.json({
				status: 200,
				message: "Record created"
			})
	}

	update(req: Request, res: Response) { }

	delete(req: Request, res: Response) { }
}