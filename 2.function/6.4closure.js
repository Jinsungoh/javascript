function makeCounter(){
    let conunt = 0

    return function(){
        return ++conunt
    }
}

let conunter1 = makeCounter()
let conunter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(conunter1())

for(let i = 0; i < 2; i++)
    console.log(conunter2())