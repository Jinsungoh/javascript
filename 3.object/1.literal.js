let user = {
    userName: 'frances',
    age:70
}

user = {
    userName:{
        first:'bob',
        last:'smith'
    },
    'nick name':'tiger face',
    age:13,
    interests:['music','movie'],
    sing: () =>console.log('lala')
}

console.log(user.userName)
console.log(user.userName.first)
user.sing()

//user.'nick name'
//user.nick name
console.log(user['nick name'])
console.log(user['userName']['first'])

user.userName.first ='john'
user['age'] = 50
console.log(user.userName.first,user.age)
//변수를 표현할떈 []써줘야한다.
let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    manName:'samuel',
    1:'one',
    2:'two',
}
//숫자로 되어있을떄는
//man.1
console.log(man['1'])