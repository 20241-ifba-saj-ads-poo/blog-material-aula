import java.util.ArrayList;
import java.util.List;

public class Escola {
    public static void main(String[] args) {
        List<Turma> turmas = new ArrayList<>();
        Turma t1 = new Turma("POO");
        turmas.add(t1);
        for (int i = 0; i < 10; i++) {
            t1.addAluno(new Aluno("Aluno "+(i+1)));
        }

        Aluno a1 = t1.getAlunos().get(0);

        Professor p1 = new Professor("Leandro 1");
        t1.addProfessor(p1);

        Professor p2 = new Professor("Leandro 2");
        t1.addProfessor(p2);

        Turma t2 = new Turma("PWEB");
        turmas.add(t2);
        t2.addProfessor(p1);
        
        for (int i = 0; i < t1.getAlunos().size(); i++) {
            if (i%2==0) {
                t2.addAluno(t1.getAlunos().get(i));
            }
        }
        //System.out.println(turmas);

        //Os dados devem ser organizados para permitir 
        //consultas sobre quais turmas um professor leciona
        System.out.println("Turmas do professor "+p2.getNome());
        for (Turma turma : turmas) {
            if(turma.getProfessores().contains(p2)){
                System.out.println(turma.getNome());  
            }
        }

        for (Turma turma : p2.getTurmas()) {
            System.out.println(turma.getNome());            
        }
        
        //quais alunos estão matriculados em uma turma específica        
        
        System.out.println("Alunos da turma "+t2.getNome());
        for (Aluno aluno : t2.getAlunos()) {
            System.out.println(aluno.getNome());
        }
        
        //quais turmas um aluno está matriculado
        System.out.println("Turmas do aluno "+a1.getNome());
        for (Turma turma : turmas) {
            if(turma.getAlunos().contains(a1)){
                System.out.println(turma.getNome());
            }
        }

        for (Turma turma : a1.getTurmas()) {
            System.out.println(turma.getNome());            
        }
        
    }
}
