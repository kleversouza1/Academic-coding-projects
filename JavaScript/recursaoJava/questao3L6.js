const indef = x => typeof x == 'undefined'
const casosAcumulados = ([x,...xs]) => {
    if (indef(x)) return []
    else if (x.length == 1) return x
    else { 
        return x
    }
}



const indeof = x => typeof x == 'undefined'

const inverte = ([x,...xs]) => {
    if (indeof(x)) return []
    else return inverte(xs).concat(x)
}

console.log(casosAcumulados([1,2,3,4]))