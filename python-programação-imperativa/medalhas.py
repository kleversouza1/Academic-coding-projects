def gerarquadro(dic):
    quadro = []
    for pais in dic:
        medalhas = dic[pais]
        quadro.append((medalhas[0],medalhas[1],medalhas[2],pais))
    quadro.sort(reverse=True)
    return quadro
    

def atualizar_tupla(med_atual,nova_med):
    ouro = med_atual[0]
    prata = med_atual[1]
    bronze = med_atual[2]
    if nova_med == 'ouro':
        ouro += 1
    elif nova_med =='prata':
        prata += 1
    elif nova_med == 'bronze':
        bronze += 1
    return(ouro,prata,bronze)
    
def ler_pais_med():
    dic_pais_med = {}
    entrada = input()
    while entrada != '*':
        pais,nova_med = entrada.split(",")
        med_atual = dic_pais_med.get(pais,(0,0,0))
        nova_tupla = atualizar_tupla(med_atual,nova_med)
        dic_pais_med[pais] = nova_tupla
        entrada = input()
    return dic_pais_med

def imprimir(quadro):
    pos = 1
    for (ouro,prata,bronze,pais) in quadro:
        print('%d)%s ouro:%d prata:%d bronze:%d' %(pos,pais,ouro,prata,bronze))
        pos +=1
    return 
dic = ler_pais_med()
quadro = gerarquadro(dic)
imprimir(quadro)