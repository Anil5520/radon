const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const PublisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    // let authorId= req.body.author_id
    // let publisherId= req.body.publisher_id

    // if(!authorId){
    //     return res.send({msg:"author is missing"})
    // }
    // let author= await authorModel.findOne({_id: authorId})
    // if(!author){
    //     return res.send({msg: "author id is missing"})
    // }
    // if(!publisherId){
    //     return res.send({msg: "publisher is missing"})  
    // }
    // let publisher= await publisherModel.findOne({_id: publisherId})
    // if(!publisher){
    //     return res.send({msg: "publisher id is missing"})
    // }
    // else{
        let bookCreated = await bookModel.create(book) 
        res.send({data: bookCreated}) 
    }
// }



const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author', 'publisher'])
    res.send({data: specificBook})

}



const updatedBook= async function (req, res) {
    let books = await bookModel.find({$or: [{publisher: '62a1c2b6abbfd11c94267a8a'}, {publisher: '62a1dbedb968db7002bed972'}]}).updateMany({isHardCover: true})
    res.send({data: books})
}



const updatedPrice= async function (req, res) {
    let books = await authorModel.find({rating: {$gt: 3.5}}).select("_id")
    let incresPprice= await bookModel.find({_id: books._id}).updateMany({$inc : {price: +10}})
    res.send({data: incresPprice})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatedBook= updatedBook
module.exports.updatedPrice= updatedPrice