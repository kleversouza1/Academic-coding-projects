//encontra o ultimo elemento de uma lista
const indef = x => typeof x == 'undefined'
const ultimo = ([x,...xs]) => {
    if (indef(x)) return 'Lista vazia'
    else return ultimoAux([x,...xs])
}
const ultimoAux = ([x,...xs]) => {
    if (xs.length == 0) return x
    else return ultimoAux(xs)
}
console.log(ultimo([]))

// maior de uma lista
const maior = ([x,...xs]) => {
    if (indef(x)) {return 'Lista vazia'}
    else return maiorAux([x,...xs])
}
const maiorAux = ([x,...xs]) => {
    if (xs.length == 0) return x
    else {
        const maior = maiorAux([...xs])
        return (x > maior) ? x : maior
    }
}
console.log(maior([2,3]))