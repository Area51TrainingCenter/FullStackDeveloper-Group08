import express = require("express")
import { handlersErrors } from "../handlers/errors.handler";
import { RolesController } from "../api/controllers/roles.controller";

const controller = new RolesController()
const routerRoles = express.Router()

routerRoles.get("/", handlersErrors.cacheo(controller.get))
routerRoles.post("/", handlersErrors.cacheo(controller.create))
routerRoles.put("/:id", controller.update)
routerRoles.delete("/:id", controller.delete)

export { routerRoles }