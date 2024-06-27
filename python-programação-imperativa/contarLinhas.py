def contar(caract,texto):
    ocorrencias = 0
    for linha in texto:
        ocorrencias += linha.count(caract)
    return ocorrencias
        



n = int(input())

linha = []
for i in range(n):
    linha.append(input())

buscar = input()

for c in buscar:
    print(c,'=',contar(c, linha))