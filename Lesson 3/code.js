console.log('startup')
var foo = document.getElementById('Foo').value
var bar = document.getElementById('Bar').value

//Doesn't work because foo and bar are set when file in initially loaded
document.getElementById('login-submit').onclick = () => {console.log(`Foo:${foo}, bar${bar}`)}

//Works because it grabes values when the method is run
document.getElementById('login-submit').onclick = () => {
    let foo = document.getElementById('Foo').value
    let bar = document.getElementById('Bar').value
    console.log(`Foo:${foo}, bar${bar}`)
} 

let testFunction = (num) => {
    console.log(num * 2)
    return num * 2
}