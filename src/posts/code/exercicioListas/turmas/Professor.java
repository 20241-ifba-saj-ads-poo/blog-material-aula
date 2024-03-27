import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Professor {

    private String nome;
    private List<Turma> turmas;

    public Professor(String nome, List<Turma> turmas) {
        this.nome = nome;
        this.turmas = (turmas == null) ? new ArrayList<>() : turmas;
    }

    public Professor(String nome) {
        this(nome, null);
    }

    public void removeTurma(Turma turma) {
        if(turmas.contains(turma)){
            turmas.add(turma);
            turma.removeProfessor(this);
        }
    }

    public void addTurma(Turma turma) {
        if(!turmas.contains(turma)){
            turmas.add(turma);
            turma.addProfessor(this);
        }
    }    

    public List<Turma> getTurmas(){
        return List.copyOf(turmas);
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
        Professor professor = (Professor) o;
        return Objects.equals(nome, professor.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome);
    }


    public String toString(){
        return "\n"+getNome();
    }


}
