
def tipo_triangulo(a,b,c):
   if a + b < c and a + c < b  and b + c < c:
          if a == b == c:
               return 'EQUILATERO'
          elif a != b != c and c != a:
               return 'ESCALENO'
          else:
               return 'ISOSCELES' 
   else:
       return 'INVALIDO'

digite = None
n1 = None
n2 = None
n3 = None

while True:
    digite = input()
    conv = digite.split()
    if digite == 'FIM':
        break
    else:
       n1 = int(conv[0])
       n2 = int(conv[1])
       n3 = int(conv[2])
       print(tipo_triangulo(n1,n2,n3))