
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'codificado.txt')

const conteudo = fs.readFileSync(caminho)

const texto = conteudo.toString()

//função que da codoficação para cada letra do respectivo texto.

const codifique = (letra) => {
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
    else if (letra == 'f') 
      return 15
    else if (letra == 'g') 
      return 16
    else if (letra == 'h') 
      return 17
    else if (letra == 'i') 
      return 18
    else if (letra == 'j') 
      return 19
    else if (letra == 'k') 
      return 20
    else if (letra == 'l') 
      return 21
    else if (letra == 'm') 
      return 22
    else if (letra == 'n') 
      return 23
    else if (letra == 'o') 
      return 24
    else if (letra == 'p') 
      return 25
    else if (letra == 'q') 
      return 26
    else if (letra == 'r') 
      return 27
    else if (letra == 's') 
      return 28
    else if (letra == 't') 
      return 29
    else if (letra == 'u') 
      return 30
    else if (letra == 'v') 
      return 31
    else if (letra == 'w') 
      return 32
    else if (letra == 'x') 
      return 33
    else if (letra == 'y') 
      return 34
    else if (letra == 'z') 
      return 35
    else if (letra == 'õ')
      return 36
    else if (letra == 'ç')
      return 37
    else if (letra == 'á')
      return 38
    else if (letra == 'ó')
      return 39
    else if (letra == '-')
      return 40
    else if (letra == 'ã')
      return 41
    else if (letra == 'é')
      return 42
    else if (letra == 'ê')
      return 43
    else if (letra == 'â')
      return 44
    else if (letra == 'í')
      return 45
    else if (letra == `A`)
      return 46
    else if (letra == 'B')
      return 47
    else if (letra == 'C')
      return 48
    else if (letra == 'D')
      return 49  
    else if (letra == 'E')
      return 50
    else if (letra == 'F')
      return 51
    else if(letra == 'G')
      return 52
    else if (letra == 'H')
      return 53
    else if (letra == 'I')
      return 54
    else if (letra == 'J')
      return 55
    else if (letra == 'K')
      return 56
    else if (letra == 'L')
      return 57
    else if (letra == 'M')
      return 58
    else if (letra == 'N')
      return 59
    else if (letra == 'O')
      return 60
    else if (letra == 'P')
      return 61
    else if (letra == 'Q')
      return 62
    else if (letra == 'R')
      return 63
    else if (letra == 'S')
      return 64
    else if (letra == 'T')
      return 65
    else if (letra == 'U')
      return 66
    else if (letra == 'V')
      return 67
    else if (letra == 'W')
      return 68
    else if (letra == 'X')
      return 69
    else if (letra == 'Y')
      return 70
    else if (letra == 'Z')
      return 71
    else if (letra == 'Á')
      return 72
    else if (letra == '!')
      return 73
    else if (letra == '?')
      return 74
    else if (letra == ',')
      return 75
    else if (letra == ' ')
      return 99
    else if (letra == '.')
      return 98
    else if (letra == '(')
      return 97
    else if(letra == ')')
      return 96
    else if(letra == '"')
      return 76
    else 
      return letra //retorna os elementos que a gente nao definiu ex numeros 
} 

const mapear = (lista) => lista.map(item => codifique(item)) /* pega uma lista de caracteres, mapea cada letra e 
substitui por seu repectivo codigo */
const textoEmLista = texto.split('') // agora tranforma o texto em uma lista
const mapeando = mapear(textoEmLista) // mapea usando o texto e o codifica-o
const listaEmTexto = mapeando.toString() // converte o texto em string novamente
const ResultadoFinal = listaEmTexto.replace(/,/g," ") /* remove as virgulas, que foram criadas apos transforma a lista em string
e adicona um espaco em cada codigo */
console.log(`Texto codificado:\n\n ${ResultadoFinal}`) // imprime o texto criptografado


// funcao que usa condições para descoficar o texto criptografado

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
     else if (letra == '15') 
       return 'f'
     else if (letra == '16') 
       return 'g'
     else if (letra == '17') 
       return 'h'
     else if (letra == '18') 
       return 'i'
     else if (letra == '19') 
       return 'j'
     else if (letra == '20') 
       return 'k'
     else if (letra == '21') 
       return 'l'
     else if (letra == '22') 
       return 'm'
     else if (letra == '23') 
       return 'n'
     else if (letra == '24') 
       return 'o'
     else if (letra == '25') 
       return 'p'
     else if (letra == '26') 
       return 'q'
     else if (letra == '27') 
       return 'r'
     else if (letra == '28') 
       return 's'
     else if (letra == '29') 
       return 't'
     else if (letra == '30') 
       return 'u'
     else if (letra == '31') 
       return 'v'
     else if (letra == '32') 
       return 'w'
     else if (letra == '33') 
       return 'x'
     else if (letra == '34') 
       return 'y'
     else if (letra == '35') 
       return 'z'
     else if (letra == '36')
       return 'õ'
     else if (letra == '37')
       return 'ç'
     else if (letra == '38')
       return 'á'
     else if (letra == '39')
       return 'ó'
     else if (letra == '40')
       return '-'
     else if (letra == '41')
       return 'ã'
     else if (letra == '42')
       return 'é'
     else if (letra == '43')
       return 'ê'
     else if (letra == '44')
       return 'â'
     else if (letra == '45')
       return 'í'
     else if (letra == `46`)
       return 'A'
     else if (letra == '47')
       return 'B'
     else if (letra == '48')
       return 'C'
     else if (letra == '49')
       return 'D'  
     else if (letra == '50')
       return 'E'
     else if (letra == '51')
       return 'F'
     else if(letra == '52')
       return 'G'
     else if (letra == '53')
       return 'H'
     else if (letra == '54')
       return 'I'
     else if (letra == '55')
       return 'J'
     else if (letra == '56')
       return 'K'
     else if (letra == '57')
       return 'L'
     else if (letra == '58')
       return 'M'
     else if (letra == '59')
       return 'N'
     else if (letra == '60')
       return 'O'
     else if (letra == '61')
       return 'P'
     else if (letra == '62')
       return 'Q'
     else if (letra == '63')
       return 'R'
     else if (letra == '64')
       return 'S'
     else if (letra == '65')
       return 'T'
     else if (letra == '66')
       return 'U'
     else if (letra == '67')
       return 'V'
     else if (letra == '68')
       return 'W'
     else if (letra == '69')
       return 'X'
     else if (letra == '70')
       return 'Y'
     else if (letra == '71')
       return 'Z'
     else if (letra == '72')
       return 'Á'
     else if (letra == '73')
       return '!'
     else if (letra == '74')
       return '?'
     else if (letra == '99')
       return ' '
     else if (letra == '98')
       return '.'
     else if (letra == '97')
       return'('
     else if(letra == '96')
       return')'
     else if(letra == '76')
       return '"'
     else 
       return letra 
} 

// Conjunto de funções, que ira cripotografar o texto
const mapear2 = (lista) => lista.map( item => descodifi(item)) // pega uma lista de codigos, mapea cada codigo e substitui por seu repectiva letra
const TextoDescoficado = ResultadoFinal // texto codificado
const Descodificando = TextoDescoficado.split(' ')  // agora tranforma o codigo em uma lista
const mapeando2 = mapear2(Descodificando) // mapea usando o texto e descodifica-o
const descodiLista = mapeando2.toString()  // converte o texto em string novamente
const textoSemVirgula2 = descodiLista.replace(/,/g,"") // remove as virgulas, que foram criadas apos transforma a lista em string
const ResultadoFinal2 = textoSemVirgula2.replace(/75/g,',') // adicionei as virgulas do texto msm 
console.log(`\n`)
console.log(`Texto codificado:\n\n${ResultadoFinal2}`) // imprime o texto codificado
