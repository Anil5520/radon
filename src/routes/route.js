const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const MW = require ("../middlewares/commonMiddlewares")
const orderController= require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createProduct", productController.createProduct )

router.post("/createUser", MW.mid1, UserController.createUser)
router.post("/createOrder", MW.mid1, orderController.createOrder)
router.get("/getOrder",  orderController.getOrder)
module.exports = router; 