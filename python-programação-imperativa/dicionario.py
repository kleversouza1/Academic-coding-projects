bolsa = dict()
bolsa['dinheiro'] = 12
bolsa['doce']     = 3
bolsa['lenço']    = 75
print(bolsa['doce'])

#criar dicionario
dic = {'jose' :1, 'fred': 42, 'maria':42,'maria':100}
print(dic)

list = list()
 
# limpando did cionario

dic1 = dic 
dic2 = dic.copy()
valor = dic.pop('jose')
print('removido',valor,dic1)

#atualizando dicionario
d1 = {'jose':1,'fred':42}
d2 = {'jose':10, 'maria':100 }
d3 = {}
d3.update(d1)
print(d3)
d3.update(d2)
print(d3)
