#pegar indice do menor
def indiceDoMenor(a):
    m = 0
    for i in range(1, len(a)): 
       if a[i] < a[m]:
         m = i
    return m
print(indiceDoMenor([2,4,1,9,0,10]))


#mapeando e aplicando em cada elemento.
def mapear(f, a):
    for i in range(len(a)):
    # invariante: para todo 0<=k<i, a[k] == f(valorAnterior(a[k]))
      a[i] = f(a[i])
xs = ['1','2','3']
mapear(int, xs)
