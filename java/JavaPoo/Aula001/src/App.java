public class App {
    public static void main(String[] args) throws Exception {
            //<tipo> nome = valor
            Celular celularA = new Celular();
            celularA.nome ="iphone 12";
            celularA.tamanhoTela = 6.1f;
            celularA.armarzenamento = 256;
            celularA.sistemaOperacional = "iOS";

            Celular celularB = new Celular();
            celularB.nome ="j1";
            celularB.tamanhoTela = 5.1f;
            celularB.armarzenamento = 16;
            celularB.sistemaOperacional ="Android";

            System.out.format("celular %s com tela de %.1f com %dgb e SO%s\n", celularB.nome,celularB.tamanhoTela,celularB.armarzenamento,celularB.sistemaOperacional);

            System.out.format("celular %s com tela de %.1f,com %dgb  e SO %s",celularA.nome,celularA.tamanhoTela,celularA.armarzenamento,celularA.sistemaOperacional);
    }
}
