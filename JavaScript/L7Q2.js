const indeof = x => typeof x ==  'undefined'
const qSort = ([x, ...xs]) => {
      if (indeof(x)) {return []}
      else{
          const pivo   = x
          const cabeca = [x, ...xs].filter(x => x < pivo)
          const corpo  = [x,...xs].filter(x=> x > pivo)
          const igual = [x,...xs].filter(x=>x==pivo) 
          return qSort(cabeca).concat(igual).concat(qSort(corpo))
      }
}

console.log(qSort([5,2,9,7]))
