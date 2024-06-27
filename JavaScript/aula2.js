//function fareaEli (x,y) {
    //const pi = 3.1415
    //return pi * x * y 
    //}
const fareaEli = (x,y,pi=3.14) => pi*x*y
//function fareaRet(x,y) {
  //  return x*y
//}
const fareaRet= (x,y) => x*y

//function fSoma (x,y){
//    return x + y
//}

const soma = (x,y) => (x+y)

const l1 = 6.1
const l2 = 4.4
const r1 = 3.0
const r2 = 5.3

resultado = soma(fareaEli(r1,r2),fareaRet(l1,l2))

console.log(resultado)