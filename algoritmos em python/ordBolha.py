def bubble_sort(lista):
    n= len(lista)
    for j in range(n-1):
        for i in range (n-1):
            if lista[i] > lista[i+1]:
                #lista[i], lista[i+1] = lista[i+1],lista[i]
                aux = lista[i]
                lista[i] = lista[i+1]
                lista[i+1] = aux
    return lista
xl = [10,1,0,3,800,91,5,4]
print(bubble_sort(xl))            