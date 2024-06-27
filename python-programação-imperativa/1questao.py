def removeIguais(xs):
    lista= []
    for i in xs:
        if i not in lista:
            lista.append(i)
    return lista


def sortMeu(xs):
    if len(xs) <=1:
        return xs
    m = xs[0]
    return sortMeu([i for i in xs if i < m]) + [i for i in xs if i == m] + sortMeu([i for i in xs if i > m])


lista = []
n = input()
while n !='FIM':
    lista.append(n)
    n = input()
#adicionei outro while
lista2 = []
n = input()
while n !='FIM':
    lista2.append(n)
    n = input()
listaConcat = lista+lista2

listaSemiguais = removeIguais(listaConcat)
emOrdem = sortMeu(listaSemiguais)
for i in emOrdem:
    print(i)

