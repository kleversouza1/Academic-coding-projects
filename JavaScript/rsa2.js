// funcao com algumas letras e seus respectiveis codigos
const codifi = (letra) => {
    if (letra == `a`)
       return 10
    else if (letra == 'b')
       return 11
    else if (letra == 'c')
      return 12
    else if (letra == 'd')
      return 13  
    else if (letra == 'e') 
      return 14
} 


// funcao de descodificao
const descodifi = (letra) => { 
    if (letra == '10') 
       return 'a'
    else if (letra == '11')
       return 'b'
    else if (letra == '12')
      return 'c'
    else if (letra == '13')
      return 'd'  
    else if (letra == '14') 
      return 'e'
} 

const sublistas  = (lista) => lista.map(item => (item.split(''))) // pega uma lista de caracteres, mapea cada letra e substitui por seu repectivo codigo
const mapear = (lista) => lista.map(itens => itens.map((x) => x.charCodeAt()))
const texto   = 'Em 1993, o Centro Nacional de Aplicações de Supercomputação (NCSA), uma unidade da Universidade de Illinois em Urbana-Champaign, lançou o NCSA Mosaic, o primeiro navegador gráfico popular da Web, que desempenhou um papel importante na expansão do crescimento da nascente World Wide Web além do nicho NeXTSTEP onde a World Wide Web havia se formado três anos antes. Em 1994, uma empresa chamada Mosaic Communications foi fundada em Mountain View, na Califórnia, e empregou muitos dos autores originaisa'  // texto de exemplo
const textoEmLista = texto.split(' ') // agora tranforma o texto em uma lista
const sublist  = sublistas(textoEmLista) // mapea e tranforma cada palavra em uma sublista ex: 
const mapeando  = mapear(sublist)
const sublistas1  = (lista) => lista.map(item => (item.toString())) 
const listano   = sublistas1( mapeando) // converte o texto codificado em string novamente
const conc = (lista)  => lista.reduce((y , h = '') => y +' '+ h)
const listaEmTexto = listano.join(` `)
const textoSemVirgula = listaEmTexto.replace(/,/g,"") // remove as virgulas, que foram criadas apos transforma a lista em string, e adicona um espaco em cada codigo
console.log(textoSemVirgula) // imprime o texto 

const mapear2 = (lista) => lista.map(itens => itens.map((x) => descodifi(x)))
const textoEmLista2 = textoSemVirgula.split(' ')
const sublist2 = sublistas(textoEmLista2)
const mapeando2 = mapear2(sublist2)
const listano2  = sublistas1(mapeando2)
const listaEmTexto2 = listano2.join(` `)
const textoSemVirgula2 = listaEmTexto2.replace(/,/g,"")

console.log(sublist2)