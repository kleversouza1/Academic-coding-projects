const descont = (desc) => (lista) => lista.map((x)=>x-x*(desc)/100)
const descont10 = descont(10)
const listaProd = [10,60,8.50,5.55,6.40,41.00,26.05,19.90,15.90,22.10,2.75]
const resultado = descont10(listaProd)
console.log(resultado)