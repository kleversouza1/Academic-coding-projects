#sem compreenssao
precos = [100.0, 200.0,500.0,800.0]
precosDesc = []
for v in precos:
    precosDesc.append(v*0.8)
print(precosDesc)

# com compreensao
desc2 = [v*0.8 for v in precos]
print(desc2)

#lista com o quadrado de cada valor
quadrado = [x**2 for x in range(11)]
print(quadrado)

#sucessor do triplo de cada calor da lista
sucessor = [3*x+1 for x in range(11)]
print(sucessor)

#valores impares que sejam sucessores 
# do triplo de cada valor de 0 a 10
sucessorTriplo = [3*x+1 for x in range(11) if x%2==0]
print(sucessorTriplo)

#laços for em comprrensao
res = []
for v in [1,2,3,4,5]:
    if v > 2:
        res.append(v*2)

comp = [v*2 for v in [1,2,3,4,5] if v > 2]
print(comp)

# x e y mesma linha imprimir os multiplos de 5 de x e y

valores = input().split()
x = int(valores[0])
y = int(valores[1])
#gera uma lista com os mutiplos de 5 de x e y
mult5 = [n for n in range(x,y+1) if n%5 == 0]
#converte os valores da lista de int para string
mult5Str = [str(v) for v in mult5]
#imprime valores separado por |
print('|'.join(mult5Str))