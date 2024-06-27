def pares(x):
    if  x == 0:
        return ''
    elif x % 2 == 1:
        return pares(x-1) + str(x-1)
    elif x % 2 == 0:
        return pares(x-2) + str(x-2)
lista= []
n = int(input())
x = pares(n)
for i in x:
   lista.append(i)

lista.sort(reverse=True)

for i in lista:  
    print(i)
   
   