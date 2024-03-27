import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Parallel
 */
public class ParallelSynchronizedList {

    public static void main(String[] args) {
        while (true) {
            List<String> nomes = List.of("nome1", "nome2", "nome3", "nome4", "nome5", "nome6");
            List<String> nomesUpper = Collections.synchronizedList(new ArrayList<>());
            
            nomes.stream().parallel().forEach(
                (nome) -> {                    
                    nomesUpper.add(nome.toUpperCase()); 
                }
            );
    
            System.out.println(nomes.size());
            System.out.println(nomesUpper.size());
                
        }        

    }
}