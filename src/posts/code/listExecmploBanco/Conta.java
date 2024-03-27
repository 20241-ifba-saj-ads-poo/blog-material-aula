package br.edu.ifba.saj.ads.poo.sistemabanco;

public class Conta {
    private int numeroConta;
    
    public Conta(int numeroConta) {
        this.numeroConta = numeroConta;
    }
    public int getNumeroConta() {
        return numeroConta;
    }
    @Override
    public String toString() {
        return "Conta [numeroConta=" + numeroConta + "]";
    }
}
