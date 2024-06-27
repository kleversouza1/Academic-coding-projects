valores = input().split()
n = int(valores[0])
k = int(valores[1])


nomes = []
for i in range(n):
    nomes.append(input())

nomes.sort()

print(nomes[k-1])
