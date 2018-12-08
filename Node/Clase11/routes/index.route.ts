import { Request, Response } from "express"
import express = require("express")
import path = require("path")
import { IndexController } from "../api/controllers/index.controller";

const routerIndex = express.Router()

routerIndex.get("/", IndexController.home)

export { routerIndex }