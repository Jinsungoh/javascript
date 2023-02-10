async function fn(){
    return 1
}
let f  = fn()
console.log(f)
//promise 를 return 한다. result상태이다.

f.then(console.log)
//
fn = async function(){
    return Promise.resolve(2)
}
fn().then(console.log)

fn = async function(){
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e.message))

//await 어씽크펑션 바디에서만 쓸수있다.
fn = async function(){
    let promise = new Promise((resolve,reject)=>
        setTimeout(()=> resolve(4),1000))
    let result = await promise 
    console.log(result)
}

fn()

//
class waiter{
    async order(){
       return await Promise.resolve('짜장면')
    }
}

new waiter().order().then(console.log)