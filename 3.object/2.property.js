let user = {}

user.height = 200
user['weight'] = 80

console.log(user.heigth,user.weight)

delete user.weight
console.log(user.weight)
//
console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])
//Object 에있는 keys 배열을 리턴한다.
user.userName = 'parker'
console.log(Object.keys(user))
console.log(Object.values(user))
//각각의 배열의합
console.log(Object.entries(user))

user = {
    greet: function(){console.log('hello')}
}
//과제: 위 코드를 arrow function 으로 refactoring하라.
user = {
      greet:() =>console.log('hello')         
}

user={
    greet(){
        console.log('hello')
    }
}

user.greet()

/*optional chaining 옵션들은 연결하는것을 말한다.,undefind 가 나오면 error뜸*/
//? 을 붙히면 undefind 에서 멈추게된다.문법 오른쪽에 쓰자.
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.cityName)
console.log(user.city?.cityName)

let street
//street = user.city.street
street = user?.city?.street
console.log(street)
//?? 리턴값을 지정해줄수있다.
street = user?.city?.street ?? 'where'
console.log(street)

//user?.address = 'sejong'

user = null
//user.greet()
user?.greet()

user = {}
//user.greet()
console.log(user.greet?.())
