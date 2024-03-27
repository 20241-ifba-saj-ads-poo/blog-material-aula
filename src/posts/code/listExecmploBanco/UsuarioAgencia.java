package br.edu.ifba.saj.ads.poo.sistemabanco;

import static java.lang.System.out;

public class UsuarioAgencia {
    public static void main(String[] args) {
        //criar agencia
        Agencia ag1 = new Agencia(2);        

        Conta minhaConta;
        for (int i = 0; i < 10; i++) {
            //pedir para agencia criar uma conta
            ag1.criarConta();
        }
        //pedir para agencia criar uma conta
        minhaConta = ag1.criarConta();
        out.println(minhaConta);
        out.println("quantidade de contas dentro da agencia: "+ag1.totalContas());
    }
}
