from re import T


def ordenaBolha(a):
    while not ordenado(a):
        i = localizarParForaOrdem(a)
        a[i],a[i+1] = a[i+1],a[i]
        
def localizarParForaOrdem(a):
    i = 0
    while i < len(a)-1 and a[i] <= a[i+1]:
        i+=1
    return i

def ordenado(a):
    i = 0
    while i < len(a)-1 and a[i] <= a[i+1]:
        i+= 1
    return i == len(a)-1

####usando for
def localizarParforaOrdem2(a):
    for i in range(len(a)-1):
        if a[i] > a[i+1]:
            return i
        return len(a)-1 #ultimo elemento da lista

def ordenado2(a):
    for i in range(len(a)-1):
        if a[i] > a[i+1]:
            return False
    return True

# definitovo 

def ordenaBolhaClassico(a):
   k = len(a)-1
   while k > 0 and not borbulharAte(a, k):
        k-= 1

def borbulharAte(a, j):
    ordenado3 = True
    for i in range(j):
        if a[i] > a[i+1]:
            a[i], a[i+1] = a[i+1], a[i]
            ordenado3 = False
    return ordenado3
xs = [3,1,2,10,2,5]
print(ordenaBolhaClassico(xs))