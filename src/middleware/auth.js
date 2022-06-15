const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    
      //If no token is present in the request header return error
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      console.log(token);
     
      let decodedToken = jwt.verify(token, "functionup-radon");
      if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" }); 
    
    else next()
}  


const authorise = async function(req, res, next) {
  // comapre the logged in user's id and the id in request
  
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists"); 
  }
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  else next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise