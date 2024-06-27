def lerMatriz(c):
    mat = []
    for _ in range(c):
        linha = [int(x) for x in input().split()]
        mat.append(linha)
    return mat

def coluna(j,mat):
    return [mat[i][j] for i in range(len(mat))]

def diagonal(mat):
    return [mat[i][i] for i in range(len(mat))]

def diagonalSec(mat):
    return [mat[i][len(mat)-i-1] for i in range(len(mat)) ]

def magico(mat):
    soma = sum(diagonal(mat))
    if soma != sum(diagonalSec(mat)):
        return -1
    for linha in mat:
        if soma != sum(linha):
            return -1
    for j in range(len(mat)):
        if soma != sum(coluna(j,mat)):
            return -1        
    return soma

n = int(input())

mat = lerMatriz(n)
print(magico(mat))