let stringArray = ['Lev', 'Dec', 'Aub', 'Sash', 'Br', 'Bo']
let intArray = [-5,8,9,1,-2]
let mixedArray = ['one', 4, 'Lev', -3]
let objectArray = [{name:'Lev', age:44},{name:'Sash', age:41},{name:'Aub', age:12}]

//Join strings in an array togther
console.log(mixedArray.join(', '))

//remove an object from array
console.log(intArray.splice(3,1))
console.log(intArray)

intArray = [-5,8,9,1,-2]
//filter objects out of array
console.log(intArray.filter((value) => {
    return value >= 0
}))
console.log(intArray)

//map objects
console.log(stringArray.map(value => {
    return `name: ${value}`
}))
console.log(stringArray)

//Find element at index
console.log(objectArray.find((value) => {
    return 'Lev' == value.name
}))
console.log(objectArray.findIndex((value) => {
    return 'Lev' == value.name
}))

//sort
console.log(intArray.sort((val1,val2) => {
    return val1 - val2
}))

//Reduce
console.log(objectArray.reduce((prev,cur) => {
    return prev += cur.age
},0))
