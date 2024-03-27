package sistemaos;

import java.time.LocalDateTime;

public class OrdemServico {
    private Status status; //get
    private LocalDateTime abertura; //get
    private Cliente cliente; //get
    private Equipamento equipamento; //get
    private TecnicoSuporte tecnicoSuporte; //get
    private LocalDateTime conclusao; //get

    public OrdemServico(Cliente cliente, Equipamento equipamento) {
        this.cliente = cliente;
        cliente.addOrdemServico(this);
        this.equipamento = equipamento;
        equipamento.addOrdemServico(this);
        this.status = Status.Lancada;
        this.abertura = LocalDateTime.now();
    }

    public boolean isAtraso() {
        return abertura.isBefore(LocalDateTime.now().minusHours(72))
                && status.equals(Status.EmAtendimento);
    }

    public void setTecnicoSuporte(TecnicoSuporte tecnicoSuporte) {
        if (this.tecnicoSuporte == null) {
            this.tecnicoSuporte = tecnicoSuporte;
            tecnicoSuporte.addOrdemServico(this);
            status = Status.EmAtendimento;
        }
    }

    public void concluir() {
        conclusao = LocalDateTime.now();
        status = Status.Finalizada;
    }

    public LocalDateTime getAbertura() {
        return abertura;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public LocalDateTime getConclusao() {
        return conclusao;
    }

    public Equipamento getEquipamento() {
        return equipamento;
    }

    public Status getStatus() {
        return status;
    }

    public TecnicoSuporte getTecnicoSuporte() {
        return tecnicoSuporte;
    }

    //NÃO DEVERIA EXISTIR 
    //Apenas para o teste de OS atrasada
    public void setAbertura(LocalDateTime abertura) {
        this.abertura = abertura;
    }

    @Override
    public String toString() {
        return "OrdemServico [status=" + status + ", abertura=" + abertura + ", cliente=" + cliente + ", equipamento="
                + equipamento + ", tecnicoSuporte=" + tecnicoSuporte + ", conclusao=" + conclusao + "]";
    }

    

}
