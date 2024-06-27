// Exercício 2.6

function fquantosIguais(x, y, z) { 
    if (x==y && y==z)
        return `todos iguais`
    else if (x!=y && y!= z && x!= z)
            return 'todos diferentes'
         else 
            return 'apenas um diferente'
}

const a = 6
const b = 5 
const c = 4

const resultado = fquantosIguais(a,b,c)  

console.log(resultado)