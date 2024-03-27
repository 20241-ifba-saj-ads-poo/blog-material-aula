import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class ContaAtomic extends Conta {
    protected AtomicInteger saldo = new AtomicInteger();

    public void deposita(int valor){
        try {
            TimeUnit.MILLISECONDS.sleep(1);
            saldo.addAndGet(valor);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public synchronized void  saca(int valor){
        if(saldo.get() >= valor){
            try {
                TimeUnit.MILLISECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            saldo.addAndGet(valor*-1);
        }
    }

    public int getSaldo() {
        return saldo.get();
    }
    public void setSaldo(int saldo) {
        this.saldo.set(saldo);
    }
}
