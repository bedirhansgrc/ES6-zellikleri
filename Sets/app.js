//Sets - Kümeler

const mySet = new Set();


mySet.add(100)
mySet.add(100)
mySet.add(3.14)
mySet.add("Bedo")
mySet.add(true)
mySet.add([1,2,3])
mySet.add({a:1,b:2,c:3})

const mySet2 = new Set([100,3.14,"Bedo"])
// console.log(mySet)
// console.log(mySet2)

//Size
// console.log(mySet.size)

//Delete

// mySet.delete("Bedo")
// console.log(mySet)

//Has 
//console.log(mySet.has("Bedo"))
//console.log(mySet.has([1,2,3]))

//For Each

// mySet.forEach(function(value){
//     console.log(value)
// })

//For of

// for(let value of mySet){
//     console.log(value)
// }

const array = Array.from(mySet)
console.log(array)