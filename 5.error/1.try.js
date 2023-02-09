let json = '{"name":"john","age":30}'
let user = JSON.parse(json)//string type을 바꿀떄쓴다.
console.log(typeof json,typeof user)

json = '{age:30}'
//JSON.parse(json)

try{
    JSON.parse(json)
} catch{
    console.log('ERROR')
}

try {
    JSON.parse(json)
}catch(e){
    console.log(e.name,'\n',e.message,'\n',e.stack)
}