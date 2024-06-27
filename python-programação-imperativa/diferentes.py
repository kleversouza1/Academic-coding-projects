n = input()
x= input().split()
y = [int(v) for v in x]
y.sort()


def remove_palavra(xs):
    lista = []
    for i in xs:
      if i not in lista:
          lista.append(i)
    lista2 = str(lista[0])
    for i in lista[1:]:
        lista2 = lista2 + ' ' + str(i)
    return lista2
lista = remove_palavra(y)
print(lista)