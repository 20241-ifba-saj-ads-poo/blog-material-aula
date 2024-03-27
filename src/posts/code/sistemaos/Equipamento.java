package sistemaos;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Equipamento {
    private String nome;
    private String tombamento;
    private List<OrdemServico> listaos;

    public Equipamento(String nome, String tombamento) {
        this.nome = nome;
        this.tombamento = tombamento;
        this.listaos = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public String getTombamento() {
        return tombamento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Equipamento equipamento = (Equipamento)o;
        return Objects.equals(nome, equipamento.nome) && Objects.equals(tombamento, equipamento.tombamento) ;
    }

    @Override
    public String toString() {
        return "Equipamento [nome=" + nome + ", tombamento=" + tombamento + "]";
    }

    public List<OrdemServico> getListaos() {
        return List.copyOf(listaos);
    }
    
    public void addOrdemServico(OrdemServico ordemServico) {
        if(!(this.listaos.contains(ordemServico))){
            this.listaos.add(ordemServico);
        }
    }

}
