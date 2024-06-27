# encontrar media
numList = list()
while True:
    valor = input()
    if valor == 'fim' : break
    num = float(valor)
    numList.append(num)

media2 = (sum(numList)/len(numList))
print(media2)

for n in numList:
    if n > media2:
        print(n)