def compor(n,a,g):
    count = 0
    for i in range(len(n)):
        if n[i] == g[i]:
            count +=1
    return (a ,count)
g = input().split()  

dic = {}
lista = []
while True:
    k = input()
    if k == '*':
        break
    b= k.split()
    lista.append((b[0],b[1:]))  


for i,a in lista:
    dic[i] = dic.get(i,a)

alunos = []

for aluno,nota in dic.items():
    alunos.append((aluno,nota))

x = sorted(alunos)
invert = []
for aluno,notas in x:
    x = compor(notas,aluno,g)
    invert.append(x)
print('Alunos Notas')
maior= []
for i,a in invert:
    maior.append((a,i))

for i,a in invert:
    print(str(i)+' '+str(a))

print('Melhor pontuacao:',max(maior)[0])       

for i, v in maior:
    if i == max(maior)[0]:
        print(v)
    
print('Pior pontuacao:',min(maior)[0])

for i, v in maior:
    if i == min(maior)[0]:
        print(v)
listaM = []
for i,v in maior:
        listaM.append(i)
#e adionar a porcetamgem 
listaK = []
for i in listaM:
    if i > 5:
        listaK.append(i)       
media = (100/len(listaM))*len(listaK)
print('Percentual de participantes com mais da metade de questoes certas:','%.1f' % media+'%')