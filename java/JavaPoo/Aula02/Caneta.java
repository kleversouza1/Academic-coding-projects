package Aula02;

public class Caneta {

    private String modelo;
    private float ponta;
    private String cor;
    private boolean tampada;

    public Caneta(String m,String c, float p){
        this.setModelo(m);
        this.cor = c;
        this.setPonta(p);
        this.tampar();
    }
    public String getCor() {
        return cor;
    }
    public String getModelo(){
        return this.modelo;
    }
    public void setModelo(String m){
        this.modelo = m;
    }
    public float getPonta(){
        return this.ponta;
    }
    public void setPonta(float p){
        this.ponta =p;
    }
    public void status(){
        System.out.println(this.cor);
        System.out.println(this.tampada);
        System.out.println(this.ponta);
        System.out.println(this.modelo);
    }

    void tampar(){
        this.tampada = true;

    }
    void destampar(){
        this.tampada = false;
    }
}