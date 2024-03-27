package posts.code.exercicioListas.militar;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Cabo {
    private String nome;
    private int identificacao;
    private int tempoServico;
    private Sargento imediato;
    private ArrayList<Soldado> subordinados;

    public Cabo(String nome, int identificacao) {
        this.nome = nome;
        this.identificacao = identificacao;
        this.tempoServico = 0;
        this.subordinados = new ArrayList<>();
    }

    public int getIdentificacao() {
        return identificacao;
    }

    public Sargento getImediato() {
        return imediato;
    }

    public String getNome() {
        return nome;
    }

    public List<Soldado> getSubordinados() {
        return List.copyOf(subordinados);
    }

    public int getTempoServico() {
        return tempoServico;
    }

    // TODO fazer remoção de subordinado na troca do imediato
    public void addSubordinado(Soldado soldado) {
        soldado.setImediato(this);
        if (!this.subordinados.contains(soldado)) {
            subordinados.add(soldado);
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Cabo cabo = (Cabo) o;
        return identificacao == cabo.identificacao && Objects.equals(nome, cabo.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, identificacao);
    }

}