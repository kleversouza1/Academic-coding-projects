const valores = [3,4,-2,0,1,40]
const mut3 = lista => lista.map((x) => x*3)
const mut = (m) => (lista) => lista.map((x) =>m*x) 
const resultado = (mut3(valores))

console.log(resultado)

const nomes = ['ana','bia','gui','lia','rafa']
const priNm = texto => texto[0]
const pegapr = (lista) => lista.map((x) => priNm(x))
const resultado2 = (pegapr(nomes))

console.log(resultado2)
