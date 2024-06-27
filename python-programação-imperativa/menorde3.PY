primeiro = int(input())
segundo = int(input())
terceiro = int(input())

menor = primeiro

if segundo < menor:
    menor = segundo
if terceiro < menor:
    menor = terceiro

print (menor)
