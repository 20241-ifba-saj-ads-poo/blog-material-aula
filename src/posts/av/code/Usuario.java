import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private int id;
    private ArrayList<Tarefa> tarefas;
    private String nome;
    private static int quantidade = 0;

    public Usuario() {
        this("Usuario");
    }

    public Usuario(String nome) {        
        this.nome = nome;
        setId(++Usuario.quantidade);
        tarefas = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    private void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    // get e set de tarefas segue o mesmo modelo da classe grupo
    public List<Tarefa> getTarefas() {
        // retornar lista em modo de somente leitura
        return List.copyOf(tarefas);
    }

    public void addTarefas(Tarefa tarefa) {
        // regras para controle da entrada tarefa no usuario
        if(tarefa.getResponsavel() == null){
            tarefa.setResponsavel(this);
        }
        this.tarefas.add(tarefa);
        if(!this.tarefas.contains(tarefa)){
            this.tarefas.add(tarefa);
        }
    }

    public void removeTarefas(Tarefa tarefa) {
        //remover tarefa da lista
        this.tarefas.remove(tarefa);
    }

    public boolean equals(Usuario outraUsuario) {
        return this.id == outraUsuario.id;
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
        return "Usuario [id=" + id + ", nome=" + nome + "]";
    }

}
