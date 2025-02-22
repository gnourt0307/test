const { Router } = require("express")
const demoController = require("../controllers/demo-controller")

const demoRouter = Router()

demoRouter.get("/", demoController.demoGetController)
demoRouter.get("/error", demoController.demoErrorController)

module.exports = demoRouter
