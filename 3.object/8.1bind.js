let user = {
    userName:'madona',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()
//function을 넣어야한다.객체가없다.
setTimeout(user.greet,100)

let fn = user.greet
setTimeout(fn,200)

setTimeout(() => user.greet(),300)