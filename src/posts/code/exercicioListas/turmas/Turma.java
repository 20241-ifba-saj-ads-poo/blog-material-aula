import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Turma {
    private String nome;
    private List<Professor> professores;
    private List<Aluno> alunos;

    public Turma(String nome, List<Professor> professores, List<Aluno> alunos) {
        this.nome = nome;
        this.professores = (professores == null) ? new ArrayList<>() : professores;
        this.alunos = (alunos == null) ? new ArrayList<>() : alunos;
    }

    public Turma(String nome) {
        this(nome, null, null);
    }

    public List<Aluno> getAlunos() {
        return List.copyOf(alunos);
    }

    public List<Professor> getProfessores() {
        return List.copyOf(professores);
    }

    public void addProfessor(Professor professor) {
        if (!professores.contains(professor)) {
            professores.add(professor);
            professor.addTurma(this);
        }
    }

    public void removeProfessor(Professor professor) {
        if (professores.contains(professor)) {
            professores.remove(professor);
            professor.removeTurma(this);
        }
    }

    public void addAluno(Aluno aluno) {
        if (!alunos.contains(aluno)) {
            alunos.add(aluno);
            aluno.addTurma(this);
        }
    }

    public void removeAluno(Aluno aluno) {
        if (alunos.contains(aluno)) {
            alunos.remove(aluno);
            aluno.removeTurma(this);
        }
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
        Turma turma = (Turma) o;
        return Objects.equals(nome, turma.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome);
    }

    @Override
    public String toString() {
        return "Turma [nome=" + nome + ", professores=" + professores + ", alunos=" + alunos + "]";
    }

}