def busca_binaria(busca, lista):
    esquerda, direita = 0, len(lista) - 1
    
    while esquerda <= direita:
        meio = (esquerda + direita) // 2
        valor_meio = lista[meio]
        
        if busca == valor_meio:
            return meio  # Retorna o índice do elemento encontrado
        elif busca < valor_meio:
            direita = meio - 1
        else:
            esquerda = meio + 1
    
    return "não achei"  # Retorna caso o elemento não seja encontrado

# Exemplo de uso
i = int(input("Digite um número: "))
lista_ordenada = [1, 2, 6, 85, 100, 120, 150]

# A lista precisa estar ordenada para a busca binária funcionar corretamente
lista_ordenada.sort()

print(busca_binaria(i, lista_ordenada))
