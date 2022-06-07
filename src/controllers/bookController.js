const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel.js")


//mongoDB assignment3


const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBookByChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData= await BookModel.find({author_id:data[0].author_id})
    res.send({msg: bookData})
}


const authorOfBook= async function (req, res) {
    let data= await BookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}}, {new: true})
    let authorData= await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.price
    res.send({msg: authorData, price})
}

const bookRange= async function (req, res) {
    let data= await BookModel.find({ price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let bookData= await AuthorModel.find({author_id:data[0].author_name})
    res.send({msg: bookData})
}

module.exports.createBooks= createBooks
module.exports.createAuthor= createAuthor
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.authorOfBook= authorOfBook
module.exports.bookRange= bookRange