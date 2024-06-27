import javax.swing.JOptionPane;

public class janela {
    public static void main(String[] args) throws Exception {
        String filme = JOptionPane.showInputDialog(null, "qual seu filme preferido 2021?", "title", JOptionPane.QUESTION_MESSAGE);
        String texto = JOptionPane.showInputDialog(null, "Digite um numero");
        int numero = Integer.parseInt(texto);
        numero = numero * 10;
        JOptionPane.showMessageDialog(null, "message"+" " +filme, "title", JOptionPane.INFORMATION_MESSAGE);
        System.out.println(filme);

    }
}
