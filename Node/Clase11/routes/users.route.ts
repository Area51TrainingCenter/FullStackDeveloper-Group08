import { Request, Response } from "express"
import express = require("express")
import { UsersController } from "../api/controllers/users.controller"
import { handlersErrors } from "../handlers/errors.handler";
import { request } from "https";
import { handlersImages } from "../handlers/images.handler";
//import { UsersController } from "../api/controllers/users.controller";

const controller = new UsersController()
const routerUsers = express.Router()

routerUsers.get("/", handlersErrors.cacheo(controller.get))
routerUsers.post("/", handlersImages.upload, handlersImages.save(), controller.create)
routerUsers.put("/:id", controller.update)
routerUsers.delete("/:id", controller.delete)


//routerUsers.get("/", UsersController.getUsers)
//routerUsers.post("/", UsersController.insertUsers)

export { routerUsers }