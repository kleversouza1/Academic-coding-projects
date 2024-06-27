def removendo_repeti(xs):
    l = []
    for i in xs:
        if i not in l:
            l.append(i)
    return l

def joaoMari (xs):
    j = 0
    m = 0
    for i in xs:
        if i % 2 == 0:
            j += 1
        else:
            m += 1
    return j , m


n= int(input())
lista= []
for _ in range(n):
    k = input()
    lista.append(int(k))

x = removendo_repeti(lista)
k = joaoMari(lista)
print(k[0])
print(k[1])
pares = 0
impares = 0
for i in lista:
    if i % 2 == 0:
        pares += i
    else:
        impares+= i
if pares > impares:
    print(pares)
else:
    print(impares)


