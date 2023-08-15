const person = {
    name: "Bedo",
    age: 22,
    salary: 69000
}

const langs = ["Python", "Java", "C++", "Php"]

const name = "Bedo"

//For In

//Object

for(let prop in person){
    console.log(prop,person[prop])
}
//Array

for(let index in langs){
    console.log(index,langs[index])
}

//String

for(let index in name){
    console.log(index,name[index])
}


//For Of

//Object --- Calısmıyor

// for(let value of person){
//     console.log(value)
// }

//Array

for(let value of langs){
    console.log(value)
}

//String

for(let value of name){
    console.log(value)
}