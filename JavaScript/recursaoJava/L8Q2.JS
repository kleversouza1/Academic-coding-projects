
const indef = x => typeof x == 'undefined'
const qtdeDigitosDiferentesDe = (param1) => (param2) => {
    if (indef(param1)) {
        return param2.length
    }
    else {
        const param3 = param2.toString().split('')
        return contando(param1)(param3)(0)
    }
}
const contando = (z) => (list) => (conta) => {
    if (indef(list)) return conta
    else {
        const head = list.slice(0,1)[0]
            const tail = list.slice(1)
            if (z != parseInt(head)) { return contando(z)(tail)(conta+1)} 
    }
}
console.log(qtdeDigitosDiferentesDe(0)(100506))