public class Caneta {

    public String modelo;
    private String cor;
    public float ponta;
    int carga;
    boolean tampada;

    void status(){
        System.out.println("modelo " + this.modelo);
        System.out.println("ponta " + this.ponta);
        System.out.println("uma caneta " + this.cor);
        System.out.println("carga " + this.carga);
        System.out.println("ja esta tampada? " + this.tampada);
    }

    void rabiscar(){
        if(tampada){
            System.out.println("erro");
        }else{System.out.println("rabisco");}
    }
    void tampar(){
        this.tampada = true;

    }
    void destampar(){
        this.tampada = false;
    }
}