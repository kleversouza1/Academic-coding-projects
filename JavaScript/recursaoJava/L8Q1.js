const indeof = x => typeof x == 'undefined'

const tamanho = ([x,...xs]) => {
   if (indeof(x)) return 0
   else  return 1 + tamanho(xs)
}

console.log(tamanho([1,2,3,5]))