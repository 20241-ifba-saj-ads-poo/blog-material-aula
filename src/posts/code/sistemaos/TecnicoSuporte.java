package sistemaos;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class TecnicoSuporte {
    private String nome;
    private List<OrdemServico> listaos;

    public TecnicoSuporte(String nome) {
        this.nome = nome;
        this.listaos = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TecnicoSuporte tecnicoSuporte = (TecnicoSuporte) o;
        return Objects.equals(nome, tecnicoSuporte.nome);
    }

    @Override
    public String toString() {
        return "TecnicoSuporte [nome=" + nome + "]";
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
