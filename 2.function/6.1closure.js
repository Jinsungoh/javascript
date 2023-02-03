//function 이다.,외부에있는것을 사용하는것을 말한다.
const age = 16

console.log(sayAge)

{
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
}