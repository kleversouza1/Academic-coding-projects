package classes;
public class Pessoa {
    private String nome = "Joao";
    private int idade;
    private double altura;


    public String getNome(){
        return nome;
    }
    
    public int getIdade(){
        return idade;
    }

    public double getAltura(){
        return altura;

    }

    public void setAltura(double altura){
        this.altura = altura;
    }

    public void setIdade(int idade){
        this.idade = idade;
    }


    public void setNome(String nome){
            this.nome = nome;
    }
    
}



