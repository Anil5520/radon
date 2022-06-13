const { createUser } = require("../controllers/userController")
const { createProduct } = require("../controllers/productController")

const mid1= function ( req, res, next) {
    let data = req.headers.isfreeappuser
    console.log(req.headers)
    if (!data){
        return res.send({msg:"request is missing a mandatory header"})
    }
    else next()
}

// const userCheck= async function(req,res,next){
//     const userData= req.body.userId
//     const check= await createUser.findById({_id : userData}).select(({_id : 1}))
//     if(!check){
//         return res.send({msg:"not a valid user"})
//     }
//     else next()
// }

// const productCheck= async function(req,res,next){
//     const userData= req.body.userId
//     const check= await createProduct.findById({_id : userData}).select(({_id : 1}))
//     if(!check){
//         return res.send({msg:"not a valid product"})
//     }
//     else next()
// }


module.exports.mid1= mid1
// module.exports.userCheck= userCheck
// module.exports.productCheck= productCheck

 