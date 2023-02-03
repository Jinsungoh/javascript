function greet(){
    console.log('hello')
}

greet()

let salute = function(){
    console.log('hi')
}

salute()
console.log(salute) 

let sayHello = function(user,greeting){
    return `${greeting},${user}`
}
console.log(sayHello('rebecca','hello'))

//과제:HI 라고 인사하는 functtion 을 정의하고, 실행하라.

const sayHi = function(){
    console.log('HI')
}
const say = sayHi
say()
//function을 반복적으로 사용할떄 쓰인다.
let shout = function(){
    return function(){
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

(function(){
    console.log('earth')
})()
//fn을쓰면 자동으로 펑션값이 들어온다.
let myFn = function(fn){
    const result = fn()
    console.log(result)
}

myFn(function(){
    return 'moon'
})

let argFn = function(){
    return 'star'
}
myFn(argFn)

let showMsg = function(from,msg='no message'){
    console.log(`${from}:${msg}`)
}

showMsg('trinity','follow rabbit')
showMsg('trinty')

