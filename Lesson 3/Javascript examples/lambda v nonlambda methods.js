//define constructor method
function createCar(name, model, log) {
    if(log) {
        console.log('creating car')
        console.log(arguments)
    }
    return {
        name: name,
        model: model
    }
}

try {
    //create object
    let car = new createCar('ford', 'focus',true)

    //Add additional methods
    car.getmodel = function () {
        console.log(this.model)
    }
    car.getname = () => {
        console.log(this.name)
    }

    //call methods
    car.getmodel()
    car.getname()

    //set program variable and recreate method to call
    this.name = 'testName'
    car.getname = () => {
        console.log(this.name)
    }
    car.getname()
} catch(e) {
    console.log(e)
}


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

