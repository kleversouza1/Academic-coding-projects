const indeof = x => typeof x == 'undefined'

const meuFilter = (f,[x,...xs]) => {
    if (indeof(x)) return []
    if (f(x)){
         return [x,...meuFilter(f,xs)]
    }
    else return [...meuFilter(f,xs)]
}

const par = (x) => (x % 2 == 0)

console.log(meuFilter(par,[1,4,5,6]))