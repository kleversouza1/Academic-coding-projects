
const subtrair = (x, y) => x - y
const somar = (x, y) => x + y
const multiplicar = (x, y) => x*y
const dividir = (x, y) => x/y
const concatenar = (x, y, sep=" ") => x+sep+y
const iniciais = (x, y) => x[0]+y[0]
const negativo = y => subtrair(0,y)


const exec = (f, x, y) => f(x, y)


const res1 = exec((x, y) => x - y, 50, 25)
const res2 = exec((x, y) => x + y, 50, 25)
const res3 = exec((x, y) => x*y, 50, 25)
const res4 = exec((x, y) => x/y, 50, 25)
const res5 = exec((x, y, sep=" ") => x+sep+y, "Isaac", "Newton")
const res6 = exec((x, y) => x[0]+y[0], "Isaac", "Newton")
const res7 = exec(y => -y,30)

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)