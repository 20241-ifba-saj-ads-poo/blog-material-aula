import java.util.ArrayList;
import java.util.List;

public class Grupo {
    private int id; // get publico
    private Usuario responsavel;// get publico
    private ArrayList<Tarefa> tarefas;// get publico somemnte 
    private static int quantidade = 0;

    public Grupo() {
        setId(++Grupo.quantidade);
        tarefas = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    private void setId(int id) {
        this.id = id;
    }

    public Usuario getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Usuario responsavel) {
        this.responsavel = responsavel;
    }

    public List<Tarefa> getTarefas() {
        // retornar lista em modo de somente leitura
        return List.copyOf(tarefas);
    }

    /*
    //para agregação
    public Tarefa addTarefas() {
        Tarefa tarefa = new Tarefa(this);
        this.tarefas.add(tarefa);
        return tarefa;
    }
    */
    
    public void addTarefas(Tarefa tarefa) {
        // regras para controle da entrada tarefa no grupo
        if (tarefa.getGrupo() == null) {
            tarefa.setGrupo(this);
        }
        if(!this.tarefas.contains(tarefa)){
            this.tarefas.add(tarefa);
        }
    }

    public boolean isConcluido() {
        // verifica a concluão de todas as tarefas do grupo
        for (Tarefa tarefa : tarefas) {
            if (!tarefa.isConcluido()) {
                return false;
            }
        }
        return true;
    }

    public void removeTarefas(Tarefa tarefa) {
        this.tarefas.remove(tarefa);
    }

    public boolean equals(Grupo outroGrupo) {
        return this.id == outroGrupo.id;
    }
    
    public int getQtdTarefasConcluidas(){
        int qtd = 0;
        for (Tarefa tarefa : getTarefas()) {
            if(tarefa.isConcluido()){
                qtd++;
            }            
        }
        return qtd;    
    }

    public int getQtdTarefasAndamento(){
        int qtd = 0;
        for (Tarefa tarefa : getTarefas()) {
            if(!tarefa.isConcluido()){
                qtd++;
            }            
        }
        return qtd;    
    }

    @Override
    public String toString() {
        return "Grupo [id=" + id + ", responsavel=" + responsavel + "]";
    }

}
