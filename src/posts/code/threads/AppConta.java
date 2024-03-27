import java.util.logging.Logger;
import java.util.stream.IntStream;

public class AppConta {
    static {
        System.setProperty("java.util.logging.SimpleFormatter.format","[%1$tF %1$tT] [%4$-7s] %5$s %n");
    }
    static Logger LOGGER = Logger.getLogger(AppConta.class.getName());

    public static void main(String[] args) throws Exception {
        LOGGER.info("Testa Saca");
        Conta conta = new Conta();
        testaSacaConta(conta);
        Conta contaSynchronized = new ContaSynchronized();
        testaSacaConta(contaSynchronized);
        Conta contaAtomic = new ContaAtomic();
        testaSacaConta(contaAtomic);

        Thread.sleep(2000);
        LOGGER.info("conta saldo:" + conta.getSaldo());
        LOGGER.info("contaSynchronized saldo:" + contaSynchronized.getSaldo());
        LOGGER.info("contaAtomic saldo:" + contaAtomic.getSaldo());
        LOGGER.info("Testa Deposita");
        conta.setSaldo(0);
        contaSynchronized.setSaldo(0);
        contaAtomic.setSaldo(0);
        
        testaDepositaConta(conta);
        testaDepositaConta(contaSynchronized);
        testaDepositaConta(contaAtomic);
        Thread.sleep(2000);
        LOGGER.info("conta saldo:" + conta.getSaldo());
        LOGGER.info("contaSynchronized saldo:" + contaSynchronized.getSaldo());
        LOGGER.info("contaAtomic saldo:" + contaAtomic.getSaldo());
    }

    private static void testaSacaConta(Conta conta) {
        conta.deposita(300);
        IntStream.rangeClosed(1, 1000000).forEach(i -> {
            Thread.startVirtualThread(() -> {
                conta.saca(100);
            });
        });
    }
    private static void testaDepositaConta(Conta conta) {
        IntStream.rangeClosed(1, 1000000).forEach(i -> {
            new Thread(() -> {
                conta.deposita(100);
            }).start();            
        });
    }
}
