const trim =function(){
    const name = "    Anilkumar Mahto      "
    console.log('result after trimming is : '+ name.trim())
}
const changetoLowerCase =function(){
    const lower = "My name is Anilkumar Mahto and i'm in Radon Batch"
    console.log(lower.toLocaleLowerCase())
}
const changetoUpperCase =function(){
    const upper = "My name is Anilkumar Mahto and i'm in Radon Batch"
    console.log(upper.toLocaleUpperCase())
}
module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase