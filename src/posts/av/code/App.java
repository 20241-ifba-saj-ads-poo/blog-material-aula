/*
 * Main:
Escreve um método main para exemplificar o uso de suas classes. Cadastre Grupos, Tarefas, Usuários e mostre como atender a cada um dos itens solicitados na questão.

• quantas tarefas concluídas e quantas tarefas em andamento cada usuário possui.
• quantas tarefas concluídas e quantas tarefas em andamento cada grupo possui;
• se um grupo ja foi completamente concluído (todas suas tarefas estão em 100%).

 */
public class App {
    public static void main(String[] args) throws Exception {
        // Cadastrar Grupo de tarefas
        Grupo gPOO = new Grupo();
        // Cadastrar Usuários
        Usuario prof = new Usuario();
        prof.setNome("Leandro");
        Usuario aluno1 = new Usuario();
        Usuario aluno2 = new Usuario();

        // Cadastrar Tarefas
        Tarefa avaliacao11 = new Tarefa();
        Tarefa avaliacao12 = new Tarefa();

        // definir responsável por tarefa
        avaliacao11.setResponsavel(aluno1);
        avaliacao12.setResponsavel(aluno2);

        // definir responsável por grupo
        gPOO.setResponsavel(prof);

        // definir andamento da tarefa
        avaliacao11.setAndamento(80);
        avaliacao12.setAndamento(100);

        // colocar tarefas no grupo
        gPOO.addTarefas(avaliacao11);
        gPOO.addTarefas(avaliacao12);

        // verificar quantidade de tarefas concluídas por usuário
        int qtdTarefasConcluidasA1 = aluno1.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasA1; " + qtdTarefasConcluidasA1);
        int qtdTarefasAndamentoA1 = aluno1.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentoA1; " + qtdTarefasAndamentoA1);

        // verificar quantidade de tarefas concluídas por usuário
        int qtdTarefasConcluidasA2 = aluno2.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasA2; " + qtdTarefasConcluidasA2);
        int qtdTarefasAndamentoA2 = aluno2.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentoA2; " + qtdTarefasAndamentoA2);

        // verificar quantidade de tarefas concluídas por grupo
        int qtdTarefasConcluidasgPOO = gPOO.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasgPOO; " + qtdTarefasConcluidasgPOO);
        int qtdTarefasAndamentogPOO = gPOO.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentogPOO; " + qtdTarefasAndamentogPOO);
        // verificar se grupo esta totalmente concluído
        boolean isConcluido = gPOO.isConcluido();
        System.out.println("isConcluido; " + isConcluido);

        avaliacao11.setAndamento(100);

        System.out.println("Concluida todas as tarefas");
        // verificar quantidade de tarefas concluídas por usuário
        qtdTarefasConcluidasA1 = aluno1.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasA1; " + qtdTarefasConcluidasA1);
        qtdTarefasAndamentoA1 = aluno1.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentoA1; " + qtdTarefasAndamentoA1);

        // verificar quantidade de tarefas concluídas por usuário
        qtdTarefasConcluidasA2 = aluno2.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasA2; " + qtdTarefasConcluidasA2);
        qtdTarefasAndamentoA2 = aluno2.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentoA2; " + qtdTarefasAndamentoA2);

        // verificar quantidade de tarefas concluídas por grupo
        qtdTarefasConcluidasgPOO = gPOO.getQtdTarefasConcluidas();
        System.out.println("qtdTarefasConcluidasgPOO; " + qtdTarefasConcluidasgPOO);
        qtdTarefasAndamentogPOO = gPOO.getQtdTarefasAndamento();
        System.out.println("qtdTarefasAndamentogPOO; " + qtdTarefasAndamentogPOO);
        // verificar se grupo esta totalmente concluído
        isConcluido = gPOO.isConcluido();
        System.out.println("isConcluido; " + isConcluido);

    }
}
