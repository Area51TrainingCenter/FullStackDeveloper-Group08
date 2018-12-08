import multer = require("multer")
import jimp = require("jimp")
import uuid = require("uuid")
import { IError } from "../interfaces/ierror.interface";
import { Request, Response, NextFunction } from "express"

const handlersImages = {
	upload: () => {
		console.log("upload")
		const optionsMulter = {
			storage: multer.memoryStorage(),
			fileFilter: (req, file, next) => {
				const isPhoto = file.mimetype.startsWith("image/")
				console.log(file)
				console.log(isPhoto)

				if (isPhoto) {
					return next(null, true)
				}

				const error: IError = new Error("The file is not a image")
				error.status = 500

				next(error, false)
			}
		}

		return multer(optionsMulter).single("photo")
	},

	save: () => {

		return async (req: Request, res: Response, next: NextFunction) => {
			console.log("save")
			if (!req.file) return next()

			const extension: string = req.file.mimetype.split("/")[1]
			const name: string = uuid.v4()

			req.body.photo = `${name}.${extension}`

			const foto = await jimp.read(req.file.buffer)
			await foto.resize(300, jimp.AUTO)
			await foto.write(`./public/uploads/${req.body.photo}`)

			next()
		}
	}
}

export { handlersImages }