import java.util.Random;

public class Personagem {
    String nome;
    int nivel;
    int forca;

    void mostrarStatus(){
        System.out.format("personagem %s (lvl %d) com %d de força.\n", nome,nivel,forca);
    }

    int calcularDano(){
        Random gerador = new Random();
        int dado26Faces = 1 + gerador.nextInt(19);
        int dano = forca + dado26Faces;
        return dano;
    }


    // metodo que nao retorna nada
    void atacar(String alvo, String habilidade){
        int danoCausado =calcularDano();
        
        if(habilidade.length() == 0){
           System.out.format("%s atacou %s e causou %d de dano\n",nome,alvo,forca);
        } else{
            System.out.format("%s usou '%s' contra %s e causou %d de dano\n",nome,habilidade,alvo,danoCausado);
        }
    }
}
