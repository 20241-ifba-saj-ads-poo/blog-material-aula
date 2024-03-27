import java.util.concurrent.TimeUnit;

public class ContaSynchronized extends Conta {
    
    public synchronized void  saca(int valor){
        if(saldo >= valor){
            try {
                TimeUnit.MILLISECONDS.sleep(1);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            saldo -=valor;
        }
    }
}
