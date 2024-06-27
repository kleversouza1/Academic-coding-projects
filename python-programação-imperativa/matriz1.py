matriz = [[23, -2, 10], [0, 1, 1]]

def imprimirMatriz(m):
    for fila in m:
        for elem in fila:
            print("{:5}".format(elem), end=' ')
        print()

print(imprimirMatriz(matriz))


#menor elemento de uma matriz

def menor(m):
    menor = m[0][0]
    for fila in m:
        for elem in fila:
            if elem < menor:
                menor = elem
    return menor

print(menor(matriz))


def posicaoDoMenor(m):
    menX, menY = 0 , 0
    for i in range(len(m)):        # i: indices das filas
        for j in range(len(m[i])): # j: indices das colunas 
            menX, menY = i , j
    return menX, menY
print(posicaoDoMenor(matriz))