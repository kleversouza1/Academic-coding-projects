#encontrar maior ou menor
maiorAteAgora = -1
n = int(input())
print('Antes', maiorAteAgora)
while n > 0:
    n = n- 1
    num = int(input())
    if num > maiorAteAgora:
        maiorAteAgora = num
    print('Maior ate agora:', maiorAteAgora)
print('Depois',maiorAteAgora)

#soma

soma = 0
print('soma inicial',soma)
n=int(input('Quantos valores? '))
while n > 0:
    n = n-1
    num = int(input())
    soma = soma + num
    print('soma ate agora:',soma)
print('Final:',soma)


#media em laço
soma = 0
print('soma inicial',soma)
n=int(input('Quantos valores? '))
cont = n
while n > 0:
    n = n-1
    num = int(input())
    soma = soma + num
print('Soma:',soma)
media = soma / cont
print('Media', '%.2f' % media)