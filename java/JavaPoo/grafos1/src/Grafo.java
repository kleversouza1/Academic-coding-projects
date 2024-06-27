import java.util.*;

class Vertice {
    int valor;
    List<Integer> adjacencias;

    public Vertice(int valor) {
        this.valor = valor;
        adjacencias = new ArrayList<>();
    }

    public void adicionarAdjacencia(int v) {
        adjacencias.add(v);
    }

    public void removerAdjacencia(int v) {
        adjacencias.remove((Integer) v);
    }

    public boolean ehVizinho(int v) {
        return adjacencias.contains(v);
    }

    public int getGrau() {
        return adjacencias.size();
    }

    public List<Integer> getAdjacencias() {
        return adjacencias;
    }
}

class Grafo {
    List<Vertice> vertices;

    public Grafo() {
        vertices = new ArrayList<>();
    }

    public void adicionarVertice(int valor) {
        vertices.add(new Vertice(valor));
    }

    public void adicionarAresta(int v1, int v2) {
        Vertice vertice1 = null, vertice2 = null;

        for (Vertice v : vertices) {
            if (v.valor == v1)
                vertice1 = v;
            else if (v.valor == v2)
                vertice2 = v;

            if (vertice1 != null && vertice2 != null)
                break;
        }

        vertice1.adicionarAdjacencia(v2);
        vertice2.adicionarAdjacencia(v1);
    }

    public void removerAresta(int v1, int v2) {
        Vertice vertice1 = null, vertice2 = null;

        for (Vertice v : vertices) {
            if (v.valor == v1)
                vertice1 = v;
            else if (v.valor == v2)
                vertice2 = v;

            if (vertice1 != null && vertice2 != null)
                break;
        }

        vertice1.removerAdjacencia(v2);
        vertice2.removerAdjacencia(v1);
    }

    public void removerVertice(int valor) {
        Vertice verticeRemovido = null;

        for (Vertice v : vertices) {
            if (v.valor == valor) {
                verticeRemovido = v;
                break;
            }
        }

        if (verticeRemovido != null) {
            vertices.remove(verticeRemovido);

            for (Vertice v : vertices) {
                if (v.ehVizinho(valor))
                    v.removerAdjacencia(valor);
            }
        }
    }

    public boolean temCicloEuleriano() {
        for (Vertice v : vertices) {
            if (v.getGrau() % 2 != 0)
                return false;
        }

        return true;
    }
}
