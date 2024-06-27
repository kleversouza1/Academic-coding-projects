from random import randrange


matriz1=[]
for _ in range(3):
    matriz1.append([0]*4)
    
print(matriz1)
matriz1[0][0] = 2
print(matriz1)

matriz2 = [[0]*4 for _ in range(3)]
print(matriz2)
matriz2[0][0] = 2
print(matriz2)


n = int(input())
matriz3 = []
for _ in range(n):
    fila = input().split()
    matriz3.append([int(elem) for elem in fila])

print(matriz3)

n2 = int(input())
matriz4 =  [[int(elem) for elem in input.split()] for _ in range(n)]
print(matriz4)