const indef = x => typeof x == 'undefined'



const casosAcumulados = (params) => {
    const [x, ...xs] = params
    if (indef(x)) return []
    else return [x, ...acumul([x,...xs])]
}

const acumul = ([x,y,...xs]) => indef(y)? [] : [x+y, ...acumul([x+y,...xs])]

console.log(casosAcumulados([1,4,8,20,15,12,10]))