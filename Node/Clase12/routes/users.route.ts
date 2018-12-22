import { Request, Response } from "express"
import express = require("express")
import { UsersController } from "../api/controllers/users.controller"
import { handlersErrors } from "../handlers/errors.handler";
import { request } from "https";
import { handlersImages } from "../handlers/images.handler";
import { authentication } from "../api/policies/authentication.policy";
import { authorization } from "../api/policies/authorization.policy";
//import { UsersController } from "../api/controllers/users.controller";

const controller = new UsersController()
const routerUsers = express.Router()

routerUsers.get("/", authentication, authorization("Operator"), handlersErrors.cacheo(controller.get))
routerUsers.post("/", handlersImages.upload(), handlersImages.save(), controller.create)
routerUsers.post("/login", handlersErrors.cacheo(controller.login))
routerUsers.post("/new-access-token", handlersErrors.cacheo(controller.newAccessToken))
routerUsers.put("/:id", controller.update)
routerUsers.delete("/:id", controller.delete)


//routerUsers.get("/", UsersController.getUsers)
//routerUsers.post("/", UsersController.insertUsers)

export { routerUsers }