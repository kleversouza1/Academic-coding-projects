#nais comum
const = dict()
nomes = ['jose','pedro','maria','jose','maria']
for chave in nomes:
        const[chave] = const.get(chave,0)+1
print(const)
#----------------------------------------

dic = {'jose':1,'fred':42,'maria':100}
for chave,valor in dic.items():
    print(chave,valor)