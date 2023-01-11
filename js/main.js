/**
 * функция преобразует строку со временем в минуты
 * @param {string} time время в виде строки, "10:50"
 * @return {number} целое число в минутах
 */

function timeToMinute(time){
    try{
        let hour = +time.split(':')[0]
    let minute = +time.split(':')[1]
    if( !(hour >= 0 && hour <=23) || !(minute >=0 && minute <= 59) ) {
        throw new RangeError('формат hh:mm, где hh - часы mm - минуты, hh - от 00 до 23, mm от 00 до 59 ')
        }
        return hour*60+minute
    } catch (error) {
        console.log(error)
    }
}
console.log(timeToMinute('23:03'))