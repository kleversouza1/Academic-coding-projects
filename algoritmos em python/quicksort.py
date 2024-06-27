def quickSort(lista, inicio=0, fim=None):
    if fim is None:
        fim = len(lista)-1
    if inicio < fim:
        p = partition(lista, inicio, fim)
        quickSort(lista, inicio, p-1)
        quickSort(lista, p+1, fim)
    return lista
def partition(lista, inicio, fim):
    pivot = lista[fim]
    i = inicio
    for j in range(inicio, fim):
        if lista[j] <= pivot:
            lista[j], lista[i] = lista[i], lista[j]
            i = i + 1
    lista[i], lista[fim] = lista[fim], lista[i]
    return i

xl = []
for i in range(10):
    entrada = input("DIgite um numero joao ")
    xl.append(entrada)
    print("a lista de joao é ",xl)
    print("a lista de joao esta ordenada assim : ",quickSort(xl))
