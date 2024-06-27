/**
 * Função para retornar o número de vogais numa string. 
 * Considere que todas as letras estão minúsculas.
 */
const indef = x => typeof(x) == 'undefined'
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

console.log(vogais('carro'))