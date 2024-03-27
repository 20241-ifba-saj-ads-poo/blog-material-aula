package sistemaos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Main {
    private static List<OrdemServico> oServicos = new ArrayList<>();
    public static void main(String[] args) {
        
        Cliente c1 = new Cliente("Leandro", "9999999999");
        Equipamento eq1 = new Equipamento("Impressora","IMP01");
        Equipamento eq2 = new Equipamento("Impressora","IMP02");
        TecnicoSuporte tecnicoSuporte = new TecnicoSuporte("Menino da TI");
        oServicos.add(new OrdemServico(c1, eq1));
        oServicos.add(new OrdemServico(c1, eq2));
        oServicos.add(new OrdemServico(c1, eq2));
        oServicos.add(new OrdemServico(c1, eq1));

        oServicos.get(2).setTecnicoSuporte(tecnicoSuporte);
        oServicos.get(2).concluir();
        oServicos.get(1).setTecnicoSuporte(tecnicoSuporte);
        //NÃO DEVERIA EXISTIR 
        //Apenas para o teste de OS atrasada
        oServicos.get(1).setAbertura(LocalDateTime.now().minusHours(82));
        
        
        System.out.println("Consultar Ordens de Serviço por Equipamento:");
//        for (OrdemServico ordemServico : listarOrdemPorEquipamento(eq1)) {
//            System.out.println(ordemServico);
//        }
        for (OrdemServico ordemServico : eq1.getListaos()) {
            System.out.println(ordemServico);
        }
        System.out.println("Consultar Ordens de Serviço por Técnico de Suporte:");
//        for (OrdemServico ordemServico : listarOrdemPorTecnicoSuporte(tecnicoSuporte)) {
//            System.out.println(ordemServico);
//        }
        for (OrdemServico ordemServico : tecnicoSuporte.getListaos()) {
            System.out.println(ordemServico);
        }
        System.out.println("Consultar Ordens de Serviço em Atraso:");
        for (OrdemServico ordemServico : listarOrdemEmAtraso()) {
            System.out.println(ordemServico);
        }
    }

    private static List<OrdemServico> listarOrdemPorEquipamento(Equipamento equipamento) {
        List<OrdemServico> listaOs = new ArrayList<>();        
        for (OrdemServico ordemServico : oServicos) {
            if(ordemServico.getEquipamento().equals(equipamento)){
                listaOs.add(ordemServico);
            }            
        }
        return listaOs;
    }
    private static List<OrdemServico> listarOrdemPorTecnicoSuporte(TecnicoSuporte tecnicoSuporte) {
        List<OrdemServico> listaOs = new ArrayList<>();        
        for (OrdemServico ordemServico : oServicos) {
            if(tecnicoSuporte.equals(ordemServico.getTecnicoSuporte())){
                listaOs.add(ordemServico);
            }            
        }
        return listaOs;
    }
    private static List<OrdemServico> listarOrdemEmAtraso() {
        List<OrdemServico> listaOs = new ArrayList<>();        
        for (OrdemServico ordemServico : oServicos) {
            if(ordemServico.isAtraso()){
                listaOs.add(ordemServico);
            }            
        }
        return listaOs;
    }
}
