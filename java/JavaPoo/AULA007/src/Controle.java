public class Controle implements Controlador {
    
    private int volume;
    private boolean ligado;
    private boolean tocando;
    public int getVolume() {
        return volume;
    }
    public void setVolume(int volume) {
        this.volume = volume;
    }
    public boolean isLigado() {
        return ligado;
    }
    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }
    public boolean isTocando() {
        return tocando;
    }
    public void setTocando(boolean tocando) {
        this.tocando = tocando;
    }
    @Override
    public void ligar() {
        this.setLigado(true);
        
    }
    @Override
    public void desligar() {
        this.setLigado(false);
        
    }
    @Override
    public void abrirMenu() {
        System.out.println("Esta ligado? " + this.isLigado());
        System.out.println("Esta tocando? " + this.isTocando());
        System.out.print("Volume: " + this.getVolume());
        for (int i = 0; i <= this.getVolume();i+=10 ){
            System.out.print("[]");
        }
    }
    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu ");
        
    }
    @Override
    public void maisVolume() {
        if (this.isLigado()) {
            this.setVolume(this.getVolume()+5);
        }
        
    }
    @Override
    public void menosVolume() {
        if (this.isLigado()) {
            this.setVolume(this.getVolume()-5);
        }
        
    }
    @Override
    public void ligarMudo() {
        if (this.isLigado()&& this.getVolume()>0) {
            this.setVolume(0);
        }
        
    }
    @Override
    public void play() {
        if (this.isLigado() && !(this.isTocando())) {
            this.setTocando(true);
        }
    
    }
    @Override
    public void pause() {
        if(this.isLigado()&& this.isTocando()){
            this.setTocando(false);
        }
        
    }

    
}
