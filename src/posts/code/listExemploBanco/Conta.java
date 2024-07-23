package br.edu.ifba.saj.ads.poo.sistemabanco;
public class Conta {
    private int numero;
    private String cliente;
    private double saldo;
    private double limite;

    public Conta(int numero, String cliente) {
        if (numero < 0) {
            this.numero = 999;
        } else {
            this.numero = numero;
        }
        setCliente(cliente);
        this.saldo = 0;
        this.limite = 100;
    }

    public Conta(int numero, String cliente, double saldo, double limite) {
        this(numero, cliente);
        this.saldo = saldo;
        this.limite = limite;
    }

    public void setCliente(String cliente) {
        if (cliente != null && !cliente.isEmpty() && !cliente.isBlank()) {
            this.cliente = cliente;
        }else{
            this.cliente = "GERENTE";
        }
    }

    public boolean saca(double quantidade) {// método
        if (this.saldo < quantidade) {
            return false;
        } else {
            this.saldo -= quantidade;
            return true;
        }
    }

    public void deposita(double quantidade) {// método
        this.saldo += quantidade;
    }

    public boolean transferir(Conta destino, double valor) {
        if (this.saca(valor)) {
            destino.deposita(valor);
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Conta [numero=" + numero + ", cliente=" + cliente + ", saldo=" + saldo + "]";
    }

}
