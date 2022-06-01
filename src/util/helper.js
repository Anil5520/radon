const printDate = function(){
    const currentDate = new Date()
    console.log('The current date is : '+ currentDate)

}
const printMonth = function(){
    const currentMonth = new Date().toLocaleString(
        'default', {month: 'long'}
    );
    console.log('The current month is : '+ currentMonth)
    
}
const getBatchInfo = function(){
    console.log('Radon, w3D3, the topic for today is Nodejs module system')
    
}
module.exports.currentDate = printDate
module.exports.currentMonth = printMonth
module.exports.getBatchInfo = getBatchInfo