//example of dynamic context
let expandoAddMethod = function() {
    let sum = 0
    Object.values(arguments).forEach((element) => {
        sum += element
    });
    return sum
}

console.log(expandoAddMethod())
console.log(expandoAddMethod(3))
console.log(expandoAddMethod(5,6,7))
