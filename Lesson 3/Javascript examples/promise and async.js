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


//Promises
    let MethodThatGetsDataAfterIndefinitePeriod = async (fail) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(fail) {
                    reject('failed')
                } else {
                    resolve(new createCar('Ford','mobile'))
                }
            },2000)
        })
    }

    let promise = MethodThatGetsDataAfterIndefinitePeriod(false).then((value) => {console.log(value)})
    console.log(promise)
    MethodThatGetsDataAfterIndefinitePeriod(true).then((value) => console.log(value), (error) => console.log(error))


    
// async
    let showOffAsync = async (fail) => {
        let test = await MethodThatGetsDataAfterIndefinitePeriod(false) // await == (value) => {return value} 
        console.log(test)
    }
    showOffAsync()
    console.log('hi')