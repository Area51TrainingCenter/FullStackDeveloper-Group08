import { Request, Response } from "express"
import express = require("express")
import { UsersController } from "../api/controllers/users.controller"
//import { UsersController } from "../api/controllers/users.controller";

const controller = new UsersController()
const routerUsers = express.Router()

routerUsers.get("/", controller.get)
routerUsers.post("/", controller.create)
routerUsers.put("/:id", controller.update)
routerUsers.delete("/:id", controller.delete)


//routerUsers.get("/", UsersController.getUsers)
//routerUsers.post("/", UsersController.insertUsers)

export { routerUsers }