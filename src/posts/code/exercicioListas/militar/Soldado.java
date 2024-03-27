package posts.code.exercicioListas.militar;

import java.util.Objects;

public class Soldado {
    private String nome;
    private int identificacao;
    private int tempoServico;
    private Cabo imediato;

    public Soldado(String nome, int identificacao) {
        this.nome = nome;
        this.identificacao = identificacao;
        this.tempoServico = 0;
    }

    public int getIdentificacao() {
        return identificacao;
    }

    public Cabo getImediato() {
        return imediato;
    }

    public String getNome() {
        return nome;
    }

    public int getTempoServico() {
        return tempoServico;
    }

    public void incrementarTempoServico() {
        tempoServico++;
    }

    // TODO fazer remoção de subordinado na troca do imediato
    public void setImediato(Cabo imediato) {
        if (!(Objects.equals(this.imediato, imediato))) {
            this.imediato = imediato;
            this.imediato.addSubordinado(this);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Soldado soldado = (Soldado) o;
        return identificacao == soldado.identificacao && Objects.equals(nome, soldado.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, identificacao);
    }
}