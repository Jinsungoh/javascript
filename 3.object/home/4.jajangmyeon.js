/* 
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/

function Food(foodName,taste){
    this.foodName = foodName
    this.taste = taste
}

function Chef(taste){
    this.cook = foodName => new Food(taste,foodName)
}

function Waiter(){
   this.order = (foodName,chef) => chef.cook(foodName)
}

const waiter = new Waiter()
const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')


console.log(waiter.order('짜장면',chef1))
waiter.order('짬뽕',chef2)

/*let chef1 = food => `달콤한${food}\n`
let chef2 = food =>`매운${food}\n`  
let waiter = (food,chef) => chef(food)

console.log(waiter('짜장면',chef1))*/