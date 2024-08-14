public class Tarefa {
    private int id;
    private Grupo grupo;
    private Usuario responsavel;
    private float andamento;
    private static int quantidade = 0;

    public Tarefa() {
        setId(++Tarefa.quantidade);
    }

    //para composição
    /*
    public Tarefa(Grupo grupo) {
        this.grupo = grupo;
        setId(++Tarefa.quantidade);
    }
    */

    private void setId(int id) {
        this.id = id;
    }

    public void setGrupo(Grupo grupo) {
        if (this.grupo != null) {
            this.grupo.removeTarefas(this);
        }
        this.grupo = grupo;
        if (this.grupo != null) {
            this.grupo.addTarefas(this);
        }
    }

    public Grupo getGrupo() {
        return grupo;
    }

    public Usuario getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Usuario responsavel) {
        if (this.responsavel != null) {
            this.responsavel.removeTarefas(this);
        }
        this.responsavel = responsavel;
        if (this.responsavel != null) {
            this.responsavel.addTarefas(this);
        }

    }

    public int getId() {
        return id;
    }

    public float getAndamento() {
        return andamento;
    }

    public void setAndamento(float andamento) {
        if ((andamento >= 0) && (andamento <= 100)) {
            this.andamento = andamento;
        }
    }

    public boolean isConcluido() {
        return andamento == 100;
    }

    public boolean equals(Tarefa outraTarefa) {
        return this.id == outraTarefa.id;
    }

    @Override
    public String toString() {
        return "Tarefa [id=" + id + ", grupo=" + grupo + ", andamento=" + andamento + "]";
    }

}
