lista = [2,5,6,4,2]
def soma(xs):
    if xs == []:
        return 0
    else:
        return xs[0] + soma(xs[1:])

print(soma(lista))


def somaSemUlti(xs):
    if xs == []:
        return 0
    else:
        return soma(xs[:len(xs)-1])


print(somaSemUlti(lista))

def numVogais(txt):
    if txt == "":
        return 0
    else:
        if txt[0] in 'aeiouAEIOU':
            return 1 + numVogais(txt[1:])
        else:
            return numVogais(txt[1:])

lista2 = ('a casa de maria joana')
print(numVogais(lista2))
