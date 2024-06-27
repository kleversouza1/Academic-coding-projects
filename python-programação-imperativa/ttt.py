def tamanho (s):
   cont = 0
   for caractere in s:
       cont += 1
   return cont

def remove_consoantes(s):
    vogais = ''
    for letra in s:
        if letra in 'aeiou':
            vogais += letra
    return vogais
def palindromo(s):
    tam = tamanho(s)
    lim = tam // 2
    for i in range (lim):
        if s[i] != s[tam-1-i]:
            return False
        
    return True
            
def analisar (risada):
    # maior que 50 = invalida
    if tamanho(risada) > 50:
       return 'INVALIDA'
    
    # so consoante = invalida
    risada_vogais = remove_consoantes(risada)
    if tamanho(risada_vogais)==0:
        return "INVALIDA"
    
    # se palindromo = engraçada
    if palindromo(risada_vogais):
        return 'ENGRACADA'
    else:
        return 'SEM GRACA'
    # caso contrario sem graça

n = int(input())
for i in range(1,n+1):
    risada = input().lower()
    print(analisar(risada))