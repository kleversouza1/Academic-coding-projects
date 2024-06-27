arq = open('palavra.txt')
conts = dict()
for linha in arq:
    palavras = linha.split()
    for palavra in palavras:
        conts[palavra] = conts.get(palavra,0)+1

lista = list()
for chave,valor in conts.items():
    lista.append((valor,chave))

lista.sort(reverse=True)
for valor, cahve in lista[:10]:
    print(chave,valor)