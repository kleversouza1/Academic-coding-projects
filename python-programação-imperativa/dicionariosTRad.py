n = int(input())
dic = dict()
for i in range(n):
    linha = input().split()
    de = linha[0]
    para = linha[2]
    dic[de] = para
    
linha = input()
while linha !='*':
    palavras = linha.split()
    
    linhaTradu = ''
    for palavra in palavras:
        traducao = dic[palavra]
        linhaTradu = linhaTradu + traducao + ' '
    print(linhaTradu.strip())
    linha = input()
        