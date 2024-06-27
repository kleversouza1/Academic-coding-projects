const indeof = x => typeof(x) == 'undefined'

const maior = ([x,...xs]) => {
    if (indeof(x)) return 0
    const maio = maior(xs)
    if (x > maio) return x 
    else return maio
}

console.log(maior([1,2,3,4,0]))