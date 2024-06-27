package ExecicioBanco;

public class ContaBanco {
    private int numConta;
    private String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    
    public void Construtor(){
        saldo = 0;
        status = false;  
    }
    public boolean getStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public int getNumConta() {
        return numConta;
    }
    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getDono() {
        return dono;
    }
    public void setDono(String dono) {
        this.dono = dono;
    }
    public float getSaldo() {
        return saldo;
    }
    public void estadoAtual(){
        System.out.println("conta: " + this.getNumConta());
        System.out.println("Tipo: " + this.tipo);
        System.out.println("Dono: " + this.getDono());
        System.out.println("Saldo: " + this.getSaldo());
        System.out.println("Status; " + getStatus());
    }
    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
    public void abrirConta(String t){
        this.setTipo(t);
        this.setStatus(true);
        if (t =="CC"){
            this.setSaldo(50);
        }else if(t=="CP"){
            this.setSaldo(150);
        }
    }
    public void fecharConta(){
        if(this.getSaldo() >0){
            System.out.println("conta com dinheiro");
        }else if(this.getSaldo() <0){
            System.out.println("conta com debito");
        }else{this.setStatus(false);}
    }
    public void depositar(float v){
        if(this.status = true){
            this.setSaldo(this.getSaldo()+v);
        }
        else{System.out.println("impossivel depositar");}
    }
    public void sacar(float v){
        if(this.getStatus()){
            if(this.getSaldo()>=v){
                this.setSaldo(this.getSaldo()-v);
            }else{System.out.println("saldo insuficeinte");}
        }else{System.out.println("conta fechada");}
    }
    public void pagarMensal(){
        int v = 0;
        if(this.getTipo() == "CC"){
            v=12;
        }
        else if(this.getTipo() == "CP"){
            v=20;
        }
        if(this.getStatus()){
            this.setSaldo(this.getSaldo()-v);}
        else{System.out.println("saldo insuficeinte");}
    }
}
