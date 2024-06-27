def buscaBinaria(val,a):
    return buscaBinariaEM(0,len(a)-1,val,a)

def buscaBinariaEM(i,j,val,a):
    m = (i+j) // 2
    while i <= j and val != a[m]:
        if val < a[m]:
            j = m-1
        else:
            i = m + 1
        m = (i + j ) // 2 
    return i <= j

xs = list(range(1,1000,3))
x = buscaBinaria(106,xs)
print(x)
