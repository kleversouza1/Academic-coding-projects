// verificar se uma lista possui um elemento
const indef = x => typeof x == 'undefined'

const elem = (e,[x,...xs]) => {
    if (indef(x)) {return false}
    else return (e==x) || elem(e,[...xs])
}

console.log(elem(5,[2,3,4,56,5]))