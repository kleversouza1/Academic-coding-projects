const produtos = [10,60,8.50,5.55,6.40,41.00,26.05,19.90,15.90,22.10,2.75]
const somar = (acc,x) => acc+x
const somatorio = (lista) => lista.reduce(somar,0)
const resultado = somatorio(produtos)
console.log(resultado)


nomes = ['organizaçao', 'mundial','saude']

const sigla = (acc, x) => acc + x[0]
const resultado2 = nomes.reduce(sigla,'')
console.log(resultado2) 


const listacongelada = Object.freeze


const iniciais = (str) => {
    const lista = str.split(' ')
    /** ALTERAÇÃO PERMITIDA */
    lista[0] = lista[0][0]
    lista[1] = lista[1][0]
    lista[3]
    /** FIM DA ALTERAÇÃO PERMITIDA */
    return saida
}

console.log()