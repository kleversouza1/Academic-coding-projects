matriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
#diagonal soma
soma = 0
for i in range(len(matriz)):
            soma+= matriz[i][i]

print(soma) 
def matriz2(matri):
    for i in range(len(matri)):
        for j in range(i+1,len(matri[i])):
            matri [i][j] = 0
print(matriz2(matriz))
