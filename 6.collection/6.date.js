console.log(Date())
console.log(typeof Date())

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString())

date = new Date('2023-02-10T01:37:30.999Z')
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay()
)
//timestamp
console.log(date.getTime())
console.log(Date.now())

date = new Date(0)
console.log(date)

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)