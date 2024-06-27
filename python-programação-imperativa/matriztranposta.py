def lerMatriz(c):
    mat = []
    for _ in range(c):
        linha = [int(x) for x in input().split()]
        mat.append(linha)
    return mat

def imprimirMatriz(mat):
    m = len(mat)
    n = len(mat[0])
    for i in range(m):
        for j in range(n):
            print(mat[i][j],end=' ')
        print()

def transposta(mat):
    m = len(mat)
    n = len(mat[0])
    trans = []
    for j in range(n):
        linha = []
        for i in range(m):
            linha.append(mat[i][j])
        trans.append(linha)
    return trans
        
c , r = [int(x) for x in input().split()]

mat = lerMatriz(c)
trans = transposta(mat)
imprimirMatriz(trans)