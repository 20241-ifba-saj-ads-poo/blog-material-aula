import java.util.concurrent.TimeUnit;

public class Conta {
    protected int saldo = 0;

    public void deposita(int valor){
        try {
            TimeUnit.MILLISECONDS.sleep(1);
            saldo += valor;
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void saca(int valor){
        if(saldo >= valor){
            try {
                TimeUnit.MILLISECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            saldo -=valor;
        }
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }
}
