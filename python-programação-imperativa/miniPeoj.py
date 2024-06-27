def calculaMedia(a,xs):
    notas = [float(i) for i in xs]
    media = sum(notas)/len(notas)
    total = str(media)
    return [a,float(total)]

media = float(input('Digite a media: '))
5
# vai receber um nome de aluno e suas notas
dicionario_Total = {}
quand_Alunos = int(input('Digite a quantidade de alunos: '))

listaNome = []
for _ in range(quand_Alunos):
    nome = input('Digite o nome do aluno: ')
    print('Nome:',nome)
    notas = input('Digite as notas de cada unidade separadas por um espaço: ')
    print('Notas de',nome+':',notas)
    listaNotas = notas.split()
    listaNome.append((nome,listaNotas))
for i,a in listaNome:
    dicionario_Total[i] = dicionario_Total.get(i,a)


dicionario_Lista = []
for aluno,nota in dicionario_Total.items():
    dicionario_Lista.append((aluno,nota))

dicionario_Lista_Org = sorted(dicionario_Lista)

listaNotas = []
for alunos,notas in dicionario_Lista_Org:
    notaMed=(calculaMedia(alunos,notas))
    
    if notaMed[1] >= media:
        print('Aluno:',notaMed[0],'|' , 'Media:',str('%.2f' %  notaMed[1]),'|','Aprovado')
    else:
        print('Aluno:',notaMed[0], '|' , 'Media:',str('%.2f' % notaMed[1]) ,'|','Reprovado')