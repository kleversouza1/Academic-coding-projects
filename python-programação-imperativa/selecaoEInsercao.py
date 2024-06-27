def ordenarInsercao(a):
  # mais da entrada
   for i in range(1, len(a)):
       inserirEmOrdem(i, a)

def inserirEmOrdem(i, a):
    j = i
    while j > 0 and a[j-1] > a[j]:
        a[j-1], a[j] = a[j], a[j-1]
        j -= 1
 
xs = [3,1,2,10,2, 5]
print(ordenarInsercao(xs))
