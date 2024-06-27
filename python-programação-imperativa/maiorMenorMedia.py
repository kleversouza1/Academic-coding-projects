entrada = input()
entrada = entrada[1:-1].split(',') # deixa a estring com cochetes em lista
ints = [int(v) for v in entrada]

maior = max(ints)
menor = min(ints)

print('Maior:', maior)
print('Menor', menor)

media = float(sum(ints))/len(ints)

print('Media: %.2f' % media)