
let types = {
    s: "this is a string",
    b: false,
    f: 1.5,
    num: 1,
    o: { one: 1 },
    u: undefined,
    fu: function f() { console.log('hi, I am a function') },
    a: ['one', 'two', 'three'],
    n: null
}

/* This console.log below takes the {types} above and sifts through the object to see what the actual data type is */

console.log('I am a string?', typeof types.s)
console.log('I am a booleon?', typeof types.b)
console.log('I am a float?', typeof types.f)
console.log('I am a number or integer?', typeof types.num)
console.log('I am a object?', typeof types.o)
console.log('I am a undefined?', typeof types.u)
console.log('I am a function?', typeof types.fu)
console.log('I am a array?', typeof types.a)
console.log('I am a null?', typeof types.n)

// -----------------------------------------------------------------------------------

let obj = {     //creates a variable, creating an object and connecting the two together
    0: 'zero',
    1: 'one',
    2: 'two'
}

let arr = ['zero', 'one', 'two']

obj[1] // calls 'one' in the obj
arr[0] // calls zero' in the array

/** when calling data in an object, the order doesn't matter because the key is named, but when calling data in an array the order does MATTER. When order matters the logic is to use an array */




