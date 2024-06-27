// programa para calcular soma dos valores de uma lista

const soma = (lista) => {
    if (lista.length == 0) {
      return 0
    } else {
      const [x, ...xs] = lista;
      return x + soma(xs)
    }
  }

const list = [3, 8, 20, 21, 34, 44]
console.log(soma(list))

/// usando spread para somar
const indef = x => typeof x == 'undefined'
const  soma2 = ([x,...xs]) => indef(x) ? 0 : x + soma(xs)
console.log(soma2(list))

const recSoma = ([x,...xs]) => indef(x) ? 0 : Number(x) + recSoma(xs)
console.log(recSoma(list))