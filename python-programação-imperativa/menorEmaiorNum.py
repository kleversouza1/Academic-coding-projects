numeros = input().split()
menor = int(numeros[0])
maior = int(numeros[0])

for num in numeros[1:]:
    n = int(num)
    if n == 0:
        break
    if n > maior:
        maior = n
    if n < menor:
        menor = n
        
print(menor,maior)