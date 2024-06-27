import java.util.ArrayList;
import java.util.List;

public class Grafo {
    private int numVertices;
    private List<List<Integer>> adjacencias;

    public Grafo(int numVertices) {
        this.numVertices = numVertices;
        adjacencias = new ArrayList<List<Integer>>(numVertices);
        for (int i = 0; i < numVertices; i++) {
            adjacencias.add(new ArrayList<Integer>());
        }
    }

    public void adicionarAresta(int v1, int v2) {
        adjacencias.get(v1).add(v2);
        adjacencias.get(v2).add(v1);
    }

    public void adicionarVertice() {
        adjacencias.add(new ArrayList<Integer>());
        numVertices++;
    }

    public void removerAresta(int v1, int v2) {
        adjacencias.get(v1).remove(Integer.valueOf(v2));
        adjacencias.get(v2).remove(Integer.valueOf(v1));
    }

    public void removerVertice(int v) {
        List<Integer> vizinhos = adjacencias.get(v);
        for (Integer vizinho : vizinhos) {
            adjacencias.get(vizinho).remove(Integer.valueOf(v));
        }
        adjacencias.remove(v);
        numVertices--;
    }

    public int getGrau(int v) {
        return adjacencias.get(v).size();
    }

    public boolean saoVizinhos(int v1, int v2) {
        return adjacencias.get(v1).contains(v2);
    }

    public boolean temCicloEuleriano() {
        for (int i = 0; i < numVertices; i++) {
            if (adjacencias.get(i).size() % 2 != 0) {
                return false;
            }
        }
        return true;
    }
}
