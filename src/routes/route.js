const express = require('express');
var lodash = require('lodash');
const externalModule1 = require('../logger/logger.js')
const externalModule2 = require('../util/helper.js')
const externalModule3 = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
   externalModule1.welcome()
   externalModule2.currentDate()
   externalModule2.currentMonth()
   externalModule2.getBatchInfo()
   externalModule3.trim()
   externalModule3.changetoLowerCase()
   externalModule3.changetoUpperCase()
   res.send('1st api')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/hello', function (req, res) {
    let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let getmonth = lodash.chunk(month, 3)

    let oddNum =[1,3,5,7,9,11,13,15,17,19]
    let getoddNum= lodash.tail(oddNum, 9)

    let getUnion= lodash.union([1,2,3,4,5],
                                [3,4,5,6,7],
                                [6,7,8,9,10],
                                [9,10,11,12,13],
                                [12,13,14,15,16]);

   
    let movies=[["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter island"], ["fantacy", "pans Labyringth"]]
    let getmovies=lodash.fromPairs(movies)
    res.send(getmonth)
    console.log(getmonth)
    console.log(getoddNum)
    console.log(getUnion)
    console.log(getmovies)
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason