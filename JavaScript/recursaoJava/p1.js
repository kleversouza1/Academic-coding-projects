const indef = x => typeof x == 'undefined'


const intercalaOrdenado = (param1) => (param2) => {
    if (param1.lenght == 0 ) &&  (param2.lenght == 0)) return []
    else if (indef(param1)) return qSort(param2)
    else if (indeof(qSort(param2))) return qSort(param1)
    else{
        const inter = (param1).concat(param2)
        return qSort(inter)
    } 

  


}


const qSort = ([x, ...xs]) => {
      if (indef(x)) {return []}
      else{
          const pivo   = x
          const cabeca = [x, ...xs].filter(x => x < pivo)
          const corpo  = [x,...xs].filter(x=> x > pivo)
          const igual = [x,...xs].filter(x=>x==pivo) 
          return qSort(cabeca).concat(igual).concat(qSort(corpo))
      }
}


console.log(intercalaOrdenado([1,2,3,4,5],[]))