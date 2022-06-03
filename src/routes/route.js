const express = require('express');
var lodash = require('lodash');
// // const externalModule1 = require('../logger/logger.js')
// // const externalModule2 = require('../util/helper.js')
// // const externalModule3 = require('../validator/formatter.js')

const router = express.Router();

// // router.get('/test-me', function (req, res) {
// //    externalModule1.welcome()
// //    externalModule2.currentDate()
// //    externalModule2.currentMonth()
// //    externalModule2.getBatchInfo()
// //    externalModule3.trim()
// //    externalModule3.changetoLowerCase()
// //    externalModule3.changetoUpperCase()
// //    res.send('1st api')
// // });

// // router.get('/test-me1', function (req, res) {
// //     res.send('My second ever api!')
// // });

// // router.get('/hello', function (req, res) {
// //     let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
// //     let getmonth = lodash.chunk(month, 3)

// //     let oddNum =[1,3,5,7,9,11,13,15,17,19]
// //     let getoddNum= lodash.tail(oddNum, 9)

// //     let getUnion= lodash.union([1,2,3,4,5],
// //                                 [3,4,5,6,7],
// //                                 [6,7,8,9,10],
// //                                 [9,10,11,12,13],
// //                                 [12,13,14,15,16]);

   
// //     let movie=[["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter island"], ["fantacy", "pans Labyringth"]]
// //     let getmovie=lodash.fromPairs(movie)

// //     res.send(getmonth)
// //     console.log(getmonth)
// //     console.log(getoddNum)
// //     console.log(getUnion)
// //     console.log(getmovie)
// // });

// // router.get('/movies', function (req, res) {
// //     const movies= ["koi mil gya", "krish", "krish3", "dune", "avtar", "mard"]
// //     console.log(movies)
// //     res.send(movies)
// // });

// // router.get('/movies/:indexNumber', function(req, res){
// //     console.log('The request objects is '+ JSON.stringify(req.params))
// //     console.log('Candidates name is '+req.params.indexNumber)
// //     res.send('Done')
// // })

// // router.get('/test-me4', function (req, res) {
// //     res.send('My last api!')
// // });



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       let ele= req.body.element
       players.push(ele)
       res.send(  { data: players , status: true }  )
   })


// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let total = 0;
   for (var i in arr) {
       total =total+ arr[i];
   }
 
   let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) / 2
   let missingNumber= consecutiveSum - total
 
    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});




 // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total=total+ arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 

module.exports = router;
// adding this comment for no reason


