function fareaEli (x,y) {
    const pi = 3.1415
    return pi * x * y 
}

function fareaRet(x,y) {
    return x*y
}

function fSoma (x,y){
    return x + y
}

const l1 = 6.1
const l2 = 4.4
const r1 = 3.0
const r2 = 5.3

const a1 = fareaRet (l1,l2)
const a2 = fareaEli (r1,r2)

resultado = fSoma(a1,a2)
const textoRet = `retãngulo de lados ${l1} e ${l2}`
const textoEli = `elipse de raios ${r1} e ${r2}`
const textoArea = `A soma das areas de um ${textoRet} e de uma ${textoEli} é igual a ${resultado}`
console.log(textoArea)