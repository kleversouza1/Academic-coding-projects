from operator import index


def algo(busca, lista):
    for i in range(len(lista)):
        if busca == lista[i]:
            return i  # Retorna o índice do elemento encontrado
    return "não achei"  # Retorna caso o elemento não seja encontrado

i = int(input("Digite um número: "))
lista = [1, 2, 6, 85]

print(algo(i, lista))