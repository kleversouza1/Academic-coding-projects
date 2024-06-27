import java.util.Arrays;

import javax.swing.JOptionPane;

public class vetores {
    public static void main(String[] args)throws Exception {
       /*  String[] nomes = new String[]{
            "cjoao","mateu","kris","pablo","uni"};

            int[] numeros = new int[100];

        Arrays.fill(numeros,-1);
        for(int posicao = 0; posicao < numeros.length;posicao++){
            System.out.println(numeros[posicao]);
    }
        
        System.out.println(Arrays.toString(numeros));*/

        String[] opcoes =  new String[]{
            "anime dragon ball",
            "serie the ofice",
            "filme lol",
            "sair"
        };
        int opcaoEscolhida = 0;
        while (opcaoEscolhida!= 3) {
            opcaoEscolhida = JOptionPane.showOptionDialog(null, "oque voce quer assistir", "amazon", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, null, opcoes, 0);
            if(opcaoEscolhida != 3){
                String messagem = "Voce assitiu" + opcoes[opcaoEscolhida];
                JOptionPane.showMessageDialog(null, messagem);}
        }
    }
}