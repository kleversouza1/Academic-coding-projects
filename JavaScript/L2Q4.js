const triangulo = (a,b,c) => {
    if ( a== b && b == c){
        return `equilatero`
    }
    else if (a == b && b != c || a == c && c != b || b == c && c != a) {
        return `isosceles`
    }else 
       return `escaleno`  
    }
  

const l1 = 5
const l2 = 5
const l3 = 5  

resultado = triangulo(l1,l2,l3)

console.log(resultado)