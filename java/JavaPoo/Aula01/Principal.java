public class Principal {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.modelo = "bic";
        c1.cor = "azul";
        c1.ponta = 0.5f;
        c1.tampada = false;
        c1.destampar();
        c1.status();
        c1.rabiscar();
    }
}
