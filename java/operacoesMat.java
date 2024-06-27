import javax.print.attribute.standard.JobHoldUntil;
import javax.swing.JOptionPane;

public class operacoesMat {
    public static void main(String[] args)throws Exception {
        int contador = 0;
        JOptionPane.showMessageDialog(null, contador, "matematica", JOptionPane.INFORMATION_MESSAGE);
        contador++; 
        JOptionPane.showMessageDialog(null, contador, "matematica", JOptionPane.INFORMATION_MESSAGE);
        contador*=5;

        JOptionPane.showMessageDialog(null, contador, "matematica", JOptionPane.INFORMATION_MESSAGE);
    }
}
