/* symbol:unique identifuer 유일한 id값*/
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id,id1,id2)

console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)
//설명문 읽을떄씀 
console.log(id1.description,id2.description,id.description)