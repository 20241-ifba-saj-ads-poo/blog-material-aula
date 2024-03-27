package br.edu.ifba.saj.ads.poo.sistemabanco;

import java.util.ArrayList;

public class Agencia {
    private int numero;
    private ArrayList<Conta> contas;
    
    public Agencia(int numero) {
        this.numero = numero;
        contas = new ArrayList<>();
    }
    
    public int getNumero() {
        return numero;
    }

    public Conta criarConta(){
        //calcula o numero da nova conta
        int numeroConta = numero*100;
        numeroConta+= contas.size();
        //instancia nova conta com o numero calculado
        Conta novConta = new Conta(numeroConta);
        //guardo nova conta na minha lista de contas
        contas.add(novConta);
        //devolvo a conta para quem pediu
        return novConta;
    }

    public int totalContas() {
        return contas.size();
    }    
}
