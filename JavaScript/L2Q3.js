const triangulo = (a,b,c) => a < b + c &&  b < a + c && c < a + b ? 'Pode forma um triangulo' : 'nao pode forma um triangulo'

l1 = 5
l2 = 4
l3 = 4

resultado = triangulo(l1,l2,l3)

console.log(resultado)