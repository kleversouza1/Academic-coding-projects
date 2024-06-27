def mediaG(xs):
    return sum(xs) / len(xs)

lista = []
dic = {}

while True:
    n = input()
    if n == '*':
        break
    d,v = n.split()
    x = d.split('-')
    data = x[1]+'-'+x[0]
    lista.append((data,v.replace(',','.'))) 

for i,b in lista:
    dic[i] = dic.get(i,b)

elementoInvertido = []
for i,v in dic.items():
    elementoInvertido.append((float(v),i))
listMed = []
for i ,d in elementoInvertido:
    listMed.append(float(i))


m = str(min(elementoInvertido)[0]) +' '+ '(' + str(min(elementoInvertido)[1]) +')'
n = str(max(elementoInvertido)[0])+' '+ '(' + str(max(elementoInvertido)[1]) +')'
print('Menor:', m)
print('Maior:', n)
print('Media:','%.2f' % mediaG(listMed))