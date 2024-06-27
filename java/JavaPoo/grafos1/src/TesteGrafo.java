public class TesteGrafo {
    public static void main(String[] args) {
        Grafo grafo1 = new Grafo();

        // Adicionando vértices
        for (int i = 1; i <= 10; i++) {
            grafo1.adicionarVertice(i);
        }

        // Adicionando arestas
        grafo1.adicionarAresta(1, 2);
        grafo1.adicionarAresta(1, 3);
        grafo1.adicionarAresta(2, 4);
        grafo1.adicionarAresta(3, 5);
        grafo1.adicionarAresta(3, 6);
        grafo1.adicionarAresta(4, 7);
        grafo1.adicionarAresta(5, 8);
        grafo1.adicionarAresta(5, 9);
        grafo1.adicionarAresta(6, 9);
        grafo1.adicionarAresta(7, 10);
        grafo1.adicionarAresta(8, 10);

        // Testando funções
        System.out.println("Grau do vértice 5: " + grafo1.vertices.get(4).getGrau()); // Saída: 3
        System.out.println("Os vértices 3 e 6 são vizinhos: " + grafo1.vertices.get(2).ehVizinho(6)); // Saída: true
        grafo1.removerAresta(1, 2);
        System.out.println("Os vértices 1 e 2 são vizinhos: " + grafo1.vertices.get(0).ehVizinho(2)); // Saída: false
        grafo1.removerVertice(10);
        System.out.println("Grafo 1 tem ciclo euleriano: " + grafo1.temCicloEuleriano()); // Saída: true

        Grafo grafo2 = new Grafo();

        // Adicionando vértices
        for (int i = 1; i <= 9; i++) {
            grafo2.adicionarVertice(i);
        }

        // Adicionando arestas
        grafo2.adicionarAresta(1, 2);
        grafo2.adicionarAresta(1, 3);
        grafo2.adicionarAresta(2, 4);
        grafo2.adicionarAresta(2, 5);
        grafo2.adicionarAresta(3, 6);
        grafo2.adicionarAresta(3, 7);
        grafo2.adicionarAresta(4, 8);
        grafo2.adicionarAresta(5, 8);
        grafo2.adicionarAresta(6, 9);
        grafo2.adicionarAresta(7, 9);

        // Testando funções
        System.out.println("Grau do vértice 3: " + grafo2.vertices.get(2).getGrau()); // Saída: 2
        System.out.println("Os vértices 2 e 5 são vizinhos: " + grafo2.vertices.get(1).ehVizinho(5)); // Saída: true
        System.out.println("Grafo 2 tem ciclo euleriano: " + grafo2.temCicloEuleriano()); // Saída: true
        
    }
}