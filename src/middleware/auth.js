const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = async function (req, res, next) {
  try{
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    
      //If no token is present in the request header return error
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    
      console.log(token);
     
      let decodedToken = jwt.verify(token, "functionup-radon");
      if (!decodedToken)
        return res.status(404).send({ status: false, msg: "token is invalid" }); 
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ msg: " Server Error", error: error.message })
  }
    next()
}  


const authorise = async function(req, res, next) {
  // comapre the logged in user's id and the id in request
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists"); 
  }
  
  let userToBeModified = req.params.userId
 
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

  let decodedToken = jwt.verify(token, "functionup-radon");
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
}
catch (error) {
  console.log(error.message)
  res.status(500).send({ msg: " Server Error", error: error.message }) 
} 
  next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise