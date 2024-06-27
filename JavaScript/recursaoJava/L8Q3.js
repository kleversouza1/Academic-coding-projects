const indeof = x => typeof x == 'undefined'

const inverte = ([x,...xs]) => {
    if (indeof(x)) return []
    else return inverte(xs).concat(x)
}

console.log(inverte([1,2,3,4]))