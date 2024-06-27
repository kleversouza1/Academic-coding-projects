import java.util.Random;

import javax.swing.JOptionPane;

public class numerosaleatorios {
    public static void main(String[] args) throws Exception {
        double dado6Faces = 1 + Math.random() * 2;
        JOptionPane.showMessageDialog(null, dado6Faces);
        Random gerador = new Random();
        int numero = 1 + gerador.nextInt(100);
        JOptionPane.showMessageDialog(null, numero);
    }
}
