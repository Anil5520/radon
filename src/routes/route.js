const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createBooks", BookController.createBooks  )
router.post("/createAuthor", BookController.createAuthor  )
router.post("/getBookByChetanBhagat", BookController.getBookByChetanBhagat  )
router.post("/authorOfBook", BookController.authorOfBook  )
router.post("/bookRange", BookController.bookRange )

module.exports = router;