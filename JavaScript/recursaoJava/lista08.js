/**
 * 
 * Importa funções auxiliares
 */
const {log,indef} = require('./utils.js')

/**
 * 
 * Escreva uma função recursiva que retorne o comprimento de uma string.
 * #recursividade 
 * #string
 */
const tamanho = (str) => 
    (str.charAt(0)==='') ? 0 : 1+tamanho(str.slice(1))

/**
 * Criar uma função que busca o índice de um determinado item 
 * em uma lista ORDENADA. Se o item estiver presente, ele deve 
 * retornar o índice, caso contrário, deve retornar -1.
 * #recursividade 
 * #lista
 */
const busca = ([x,...xs],elem,acc=0) => {
    if (indef(x)) return -1 
    else if (elem===x) return acc
    else return busca(xs,elem,acc+1)
}

/**
 * Dado um número, devolva a soma total desse número 
 * multiplicado por cada número entre 1 e 10.
 * #recursividade
 * #matemática
 */
const multiSoma = (n,count=10) => {
    if (count===0) return 0
    else return n*count+multiSoma(n,count-1)
}

/**
 * Escreva uma função recursiva que inverte uma string.
 * #recursividade
 * #string
 */
const inverte = (str) => 
    (str.charAt(0)==='') ? '' : inverte(str.slice(1))+str.charAt(0)

/**
 * Escreva uma função recursiva que encontre a soma dos primeiros n números naturais.
 */
const soma = (n) => 
    (n===1)? 1 : n+soma(n-1)

/**
 * Criar uma função que receba um número como argumento. Some todos os números de 1 ao número que passou para a função. 
 * Por exemplo, se a entrada for 4 então a sua função deve retornar 10 porque 1 + 2 + 3 + 4 = 10.
 */
const somaAte = (n) => 
    (n==0)? 0 : n+somaAte(n-1)

/**
 * Criar uma função que calcula a soma dos quadrados diferentes até um número n. 
 */
const somaQuadrados = (n) =>
    (n==0)? 0 : n**2+somaQuadrados(n-1)

/**
 * Criar uma função recursiva que pega dois parâmetros e repete a string n vezes. 
 * O primeiro parâmetro txt é a string a ser repetida e o segundo parâmetro é o número de vezes 
 * que a string deve ser repetida.
 */
const repita = (txt,n) => 
    (n===0) ? "" : txt+repita(txt,n-1)

/**
 * Um vendedor tem uma série de cidades para visitar. 
 * Deve-se calcular o número total de caminhos possíveis 
 * a percorrer, visitando cada cidade uma vez antes de 
 * regressar à casa. Devolver o número total de caminhos 
 * possíveis que um vendedor pode percorrer, dadas n cidades.
 * Para cidades A, B e C, os caminhos possíveis seriam:
 * A -> B -> C
 * A -> C -> B
 * B -> A -> C
 * B -> C -> A
 * C -> B -> A
 * C -> A -> B
 */
const caminhos = (n) => 
    (n===1)? 1 : n*caminhos(n-1)
//versão com recursividade em cauda
// const caminhos = (n,acc=1) => 
//     (n===1)? acc : caminhos(n-1,n*acc)

/**
 * Criar uma função que encontre o maior valor 
 * numa lista de inteiros usando a recursividade.
 * Considere que a lista possui pelo menos um elemento.
 */
const maior = ([x,y,...xs]) => {
    if (indef(y)) return x
    else return (x>y)? maior([x,...xs]) : maior([y,...xs])
}

/**
 * Crie uma função que pega um número inteiro positivo na base 10 
 * e o converte para uma outra base passada como argumento:
 * base 2, base 8, ou base 16. A função deve retornar a string 
 * representativa do número nessa nova base.
 */
const dec2 = (base) => (n) => {
    const baseReg = {2:'01',8:'01234567',16:'0123456789abcdef'}
    if (n<base) return baseReg[base][n]
    else {
        const quo = Math.floor(n/base)
        const resto = n%base
        return dec2(base)(quo)+`${baseReg[base][resto]}`
    }
}

/**
 * Criar uma função que pega uma lista e devolve a soma de
 * todos os itens. Atenção: o item de uma lista pode ser outra lista.
 */
const somaAninhado = ([x,...xs]) => {
    if (indef(x)) return 0
    else if (!(x instanceof Array)) return x+somaAninhado(xs)
    else return somaAninhado(x)+somaAninhado(xs)
}

/**
 * "A Conjectura de Collatz"
 * Considere a seguinte operação sobre um número inteiro positivo arbitrário:
 * Se n é par -> n / 2
 * Se n é ímpar -> n * 3 + 1
 * Criar uma função para avaliar repetidamente estas operações, até atingir 1. 
 * Devolver o número de passos realizados.
 * Ver o exemplo seguinte, usando 10 como entrada, com 6 passos:
 * 1. 10 is even - 10 / 2 = 5
 * 2. 5 is odd - 5 * 3 + 1 = 16
 * 3. 16 is even - 16 / 2 = 8
 * 4. 8 is even - 8 / 2 = 4
 * 5. 4 is even - 4 / 2 = 2
 * 6. 2 is even - 2 / 2 = 1 -> Atingiu 1, portanto, retorna 6 (passos).
 */
const collatz = (n) => {
    if (n===1) return 0
    else if (n%2===0) return 1+collatz(n/2)
    else return 1+collatz(n*3+1)
}

/**
 * Função que determina se uma string é um palíndromo.
 * Você deve desconsiderar todos caracteres que não sejam letras.
 * Tanto faz maiúsculas e minúsculas.
 * Você deve desconsiderar acentuações (substituir pelas letras sem acentos).
 * A chamada palindromo('Socorram-me, subi no ônibus em marrocos!'), por exemplo,
 * deve retornar TRUE.
 */
const palindromo = (txt) => {
    const preprocessa = (txt) => {
        if (txt==='') return ''
        //transforma em minúsculas
        const minusculas = txt.toLowerCase()
        //retira espaços
        const semespacos = minusculas.replace(/\s/g,'')
        //retira acentuação
        //obs: o método "normalize" serve para converter 
        //uma string no seu formato padrão Unicode. 
        //Neste caso, utilizamos o parâmetro NFD que pode 
        //separar os acentos das letras e devolver os seus códigos Unicode.
        const semacentos = semespacos.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        //retira os demais caracteres que não são letras
        const letras = semacentos.match(/[a-z]/g).join('')
        return letras
    }
    const helper = (txt) => {
        if (txt.length < 2) return true
        else if (txt[0]!==txt.slice(-1)) return false
        else return helper(txt.slice(1,-1))
    }
    const txtlimpo = preprocessa(txt)
    return helper(txtlimpo)
}

/**
 * Função para retornar o número de vogais numa string. 
 * Considere que todas as letras estão minúsculas.
 */
const vogais = (str) => {
    const helper = ([x,...xs]) => {
        if (indef(x)) return 0
        //testa se alguma das letras a,e,i,o,u existe em (corresponde a) x
        else if (/[aeiou]/.test(x)) return 1+helper(xs)
        else return helper(xs)
    }
    if (str==='') return 0
    else return helper(str.split(''))
}

/**
 * Criar uma função que transforma frases terminadas com múltiplos pontos 
 * de interrogação ? ou pontos de exclamação ! numa frase que termina apenas 
 * com um, sem alterar a pontuação no meio das frases. 
 * Ex: semgritaria("O que é isso?????") ---> "O que é isso?"
 */
const eliminaIntExc = (str) => {
    const helper = ([x,y,...xs]) => {
        if (x !== y) return [x,y,...xs]
        else if (/[?!]/.test(x)) return helper([y,...xs])
        else return [x,y,...xs]
    }
    if (str.length <= 2) return str
    const strinvertida = inverte(str)
    if (!(/[!?]/.test(strinvertida[1]))) return str
    else {
        const strlista = strinvertida.split('')
        return inverte(helper(strlista).join(''))
    }
}

/**
 * Função para retornar o número de dígitos do valor total de 
 * permutações possíveis para o conjunto formado por n elementos
 * diferentes. O valor de n é a entrada da função.
 * Ex: ndigitospermut(5) ---> 3 porque 5 elementos diferentes permitem 
 * 120 permutações e como 120 possui três dígitos.... resultado = 3.
 */
const ndigitospermut = (n) => {
    const ndigitos = (n) => {
        //quando n é muito grande (o que é usual ao se aplicar o fatorial),
        //JS representa o inteiro na notação científica (ex: 1.345e+25),
        //o que muda o algoritmo para contar o número de dígitos: nesse caso,
        //transformo em string, identifico a posição do caracter '+' e 
        //retorno o número que vem a seguir do '+' adicionado de 1; esse
        //é exatamente a quantidade de dígitos.
        const str = n.toString()
        const pos = str.search(/\+/) 
        if (pos > -1) return 1+parseInt(str.slice(pos))
        //... para números não tão gigantescos, aplicamos a lógica algoritma
        //recursiva usual para contar o número de dígitos.
        else if (n<10) return 1
        else return 1+ndigitos(parseInt(n/10))
    }
    const fat = (n) => n===0? 1 : n*fat(n-1)
    return ndigitos(fat(n))
}


/**
 * A operação de deslocamento de bit à direita (shift right) é semelhante 
 * ao piso (floor) da divisão de inteiros por potências de 2. Portanto, 
 * o processo é repetitivo e pode ser feito de forma recorrente.
 * Existe um operador para realizar essa operação de deslocamente em JS; 
 * trata-se do operador lógico `>>`.
 * Você deve criar uma função que imita esse operador, sem usar o operador, obviamente!
 * Ex: deslocaDir(80,3) ---> 10 pois $80/2^3=10$. Veja que deslocamento à direita 
 * significa deslocar 3 bits para a direita na representação binária do número. 
 * Ou seja, se $80_2=1010000$, ao deslocarmos 3 bits para direita, temos $0001010$, que
 * corresponde ao número 10 em binário. Voilà!
 */
const deslocaDir = (bits) => (num) => {
    if (bits===0) return num
    if (bits===1) return Math.floor(num/2)
    else return deslocaDir(bits-1)(Math.floor(num/2))
}


module.exports = {
    tamanho,
    busca,
    multiSoma,
    inverte,
    soma,
    somaAte,
    somaQuadrados,
    repita,
    caminhos,
    maior,
    dec2,
    somaAninhado,
    collatz,
    palindromo,
    vogais,
    eliminaIntExc,
    ndigitospermut,
    deslocaDir
}