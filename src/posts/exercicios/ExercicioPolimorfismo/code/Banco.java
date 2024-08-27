import java.util.List;

public class Banco {
    private List<Conta> contas;


    public Banco() {
        this.contas = new ArrayList();
    }

    public void addConta(String nomeCorrentista){
        //...
    }

    public Conta getConta(int numeroConta) {
        //...
    }

    public void debitar(int numeroConta, double valor) {
        Debito d = new Debito(valor);
        getConta(numeroConta).executarOperacao(d);
    }

    public void creditar(int numeroConta, double valor) {
        Credito c = new Credito(valor);
        getConta(numeroConta).getConta().executarOperacao(c);
    }

    public double getSaldo(int numeroConta) {
        return getConta(numeroConta).getSaldo();
    }

    public void transferir(int numeroContaOrigem, int numeroContaDestino, double valor) {
        debitar(numeroContaOrigem, valor);
        creditar(numeroContaDestino, valor);
    }
}