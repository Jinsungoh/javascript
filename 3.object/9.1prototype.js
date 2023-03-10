let animal = {
    isAlive: true
}
//new 를 써야 생성자다
function Rabbit(rabbitName){
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

function Duck(duckName){
    this.duckName = duckName
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)
//생성자가 같다.
let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')