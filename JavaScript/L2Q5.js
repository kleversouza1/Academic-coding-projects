const dist = (x1,y1,x2,y2) => Math.sqrt((y1-x1)**2 + (x2-y2)**2)

const x1 = 5
const x2 = 6
const y1 = 6
const y2 = 7

resultado = dist(x1,y1,x2,y2)

console.log(resultado)