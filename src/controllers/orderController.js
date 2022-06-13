const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    let uId = await userModel.findById(req.body.userId)
    let pId = await productModel.findById(req.body.productId)

    if (!data.userId)
        res.send({ msg: "User ID is required" })
    else if (!uId)
        res.send({ msg: "Enter valid User ID" })
    else if (!data.productId)
        res.send({ msg: "Product ID is required" })
    else if (!pId)
        res.send({ msg: "Enter valid Product ID" })
    else {
      let saveData = await orderModel.create(data);
      res.send({mag : saveData})
      
        // if (req.headers["isfreeappuser"] === "true") {
        //     await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
        // }
        // else {
        //     let pPrice = pId.price;
        //     if (uId.balance >= pPrice) {
        //         await userModel.updateOne({ _id: data.userId }, { $inc: { balance: -pPrice } }, { new: true })
        //         await orderModel.updateOne({ _id: saveData._id }, { $set: { amount: pPrice } }, { new: true })
        //         res.send({ msg: saveData });
        //     }
        //     else res.send({ msg: "user doesn't have enough balance" })
        // }

    }
}

const getOrder= async function (req, res) {
    
    let idData = await orderModel.find().populate(["userId", "productId"])
    res.send({data: idData})
}

module.exports.createOrder= createOrder
module.exports.getOrder= getOrder