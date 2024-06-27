import java.util.Scanner;

public class lerobjetos {

    public static void main(String[] args) throws Exception {
        String raking;
        int posicao;
        String valor;
        Scanner leitor = new Scanner(System.in);
        //leitor.useDelimiter("[\r\n]+");

        System.out.println("Qual seu elo? ");
        raking = leitor.nextLine();

        System.out.println("Qual seu tier? ");
        valor = leitor.nextLine();
        posicao = Integer.parseInt(valor);

        System.out.println("qual seu campeao? ");
        String campeao = leitor.nextLine();

        System.out.println("campeao "+ campeao + " no elo " + raking + " " + posicao);
    }
}