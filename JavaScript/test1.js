function trian (a,b,c) {
    if (a + b >= c || a + c >= b || b + c >= a) {
        return true
    } else {
        return false
    } 
}

const l1 = 1
const l2 = 3
const l3 = 5
resultado = trian(l1,l2,l3)
console.log(resultado)
