package CLASSEScarro;
public class Carro {
   private int ligar;
   private int portas;
   private int cinto;
   private int pressaoPneu;
   private int capo;

   public Carro(int ligar,int portas,int cinto,int pressaoPneu,int capo){
      this.ligar = ligar;
      this.portas = portas;
      this.cinto = cinto;
      this.pressaoPneu = pressaoPneu;
      this.capo = capo;

   }

   public void igniçao(String status){
      if(portas == 1 && cinto == 1 && pressaoPneu == 1 && capo == 1){status = System.out.println("ligando carro");}
      
      else{System.out.println("Carro nao pode ser ligado");} 
      
   }
}
