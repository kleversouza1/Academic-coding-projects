//const quadrado = (x) => x**2 

//const quarta = (x) => (quadrado(quadrado(x)))

//const n = 4

//resultado = quarta(n)

//console.log(resultado)


const citar = (x,y) => `${y}, ${x[0]}.`

const nome = "Albert"
const sobrenome = "Einstein"

resultado = citar (nome,sobrenome)

const citacao = `Como citar ${nome} ${sobrenome}: ${resultado}`
console.log(citacao)