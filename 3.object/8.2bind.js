let user = {
    userName:'leo'
}

function greet(){
    console.log(`I am ${this.userName}.`)
}

greet()
//this 변수안에다가 user객체를 집어넣은 greet객체를 콜하는것,bind 는 return하는것이다.
let fn = greet.bind(user)
fn()

setTimeout(fn,100)

user = {
    userName:'john',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

//fn 에 user.greet 을 할당하라.
//  greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn,200)

console.log(fn == user.greet)

