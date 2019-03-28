let sayHi = function() { /* A variable sayHi that points at a function */
    console.log('Hi')
}

let sayHello = sayHi /* A function sayHello that points at the variable sayHi  */

//sayHi = null

// sayHi()
// sayHello()

function runMe(myFunc) {
    myFunc()
}

runMe(sayHello)