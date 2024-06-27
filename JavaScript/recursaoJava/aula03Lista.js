/// inverter ordem
const indef = x => typeof x == 'undefined'
const invert = ([x,...xs]) => indef(x) ? [] : [... invert(xs),x]

console.log(invert([1,2,3,4]))

/// duplicar elelemntos de uma lista
const duplica = ([x,...xs]) => indef(x) ? [] : [x,x,...duplica(xs)]

console.log(duplica([1,2]))