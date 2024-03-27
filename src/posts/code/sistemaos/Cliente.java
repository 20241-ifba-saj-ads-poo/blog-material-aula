package sistemaos;

import java.util.ArrayList;
import java.util.List;

public class Cliente {

    private String nome;
    private String telefone;
    private List<OrdemServico> listaos;
    

    public Cliente(String nome, String telefone) {
        this.nome = nome;
        this.telefone = telefone;
        this.listaos = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public List<OrdemServico> getListaos() {
        return List.copyOf(listaos);
    }

    @Override
    public String toString() {
        return "Cliente [nome=" + nome + ", telefone=" + telefone + "]";
    }

    public void addOrdemServico(OrdemServico ordemServico) {
        if(!(this.listaos.contains(ordemServico))){
            this.listaos.add(ordemServico);
        }
    }

    

}
