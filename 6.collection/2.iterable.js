let range = {
    from:1,
    to:3,

    [Symbol.iterator](){
        this.current = this.from
        return this
    },

    next (){
        if(this.current <= this.to)
        return {
            done:false,
            value:this.current++
        }
    else
        return{
            done:true
        }
    }
}

for(let num of range)
    console.log(num)

//generator 반복해서생성되는값을 적자. function*,yiled 는 필수이다.
function* generator() {
    let val = 1
    while(val <= 3) yield val++
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g,',',typeof g)

//
function* gen(){
    yield 1
    yield ['a','b']
    yield function(){}
} 

for(let val of gen())
    console.log(val)

function gen2() {
    yield* generator()
    yield* ['a','b']
    yield 9
}

for(let val of gen2())
    console.log(val)