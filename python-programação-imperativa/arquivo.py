arq  = open('mbox-short.txt')
arq2 = open('mbox-short2.txt','w')
for linha in arq:
    linha = linha.rstrip()
    if not '@uct.ac.za' in linha:
        continue
    arq2.write(linha + '\n')
arq2.close()