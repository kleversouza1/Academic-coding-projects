
public class Main {
    public static void main(String[] args) {
        // Cria um grafo com 8 vértices
        Grafo grafo = new Grafo(8);
    
        // Adiciona arestas
        grafo.adicionarAresta(1, 2);
        grafo.adicionarAresta(2, 3);
        grafo.adicionarAresta(3, 4);
        grafo.adicionarAresta(4, 7);
        grafo.adicionarAresta(7, 8);
        grafo.adicionarAresta(2, 5);
        grafo.adicionarAresta(5, 6);
        grafo.adicionarAresta(6, 3);
        grafo.adicionarAresta(6, 7);
    
        // Adiciona um vértice
        grafo.adicionarVertice();
    
        // Remove uma aresta
        grafo.removerAresta(4, 7);
    
        // Remove um vértice
        grafo.removerVertice(8);
    
        // Imprime o grau de um vértice
        System.out.println("Grau do vértice 3: " + grafo.getGrau(3));
    
        // Verifica se dois vértices são vizinhos
        System.out.println("Vértices 2 e 5 são vizinhos? " + grafo.saoVizinhos(2, 5));
    
        // Verifica se o grafo tem ciclo euleriano
        System.out.println("O grafo tem ciclo euleriano? " + grafo.temCicloEuleriano());
    }    
}
