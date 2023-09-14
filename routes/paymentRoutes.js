const express = require('express')
const route = express.Router()
const paymentControllers = require("../controllers/paymentControllers")

route.post("/create-customer",paymentControllers.createCustomer)
route.post("/get-token",paymentControllers.getToken)
route.post("/add-card",paymentControllers.addCard)
route.post("/create-charge",paymentControllers.createCharges)

module.exports = route