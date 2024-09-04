package br.edu.ifba.saj.ads.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.edu.ifba.saj.ads.demo.model.User;
import br.edu.ifba.saj.ads.demo.repository.UserRepository;

@SpringBootApplication
public class DemoApplication  implements CommandLineRunner {

	@Autowired
    private UserRepository userRepository;


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Override
    public void run(String... args) throws Exception {
        // Salvando usuários
        User usuario = new User();
        usuario.setName("João");
        usuario.setEmail("joao@example.com");
        userRepository.save(usuario);


        // Exibindo todos os usuários
        System.out.println("Lista de usuários:");
        userRepository.findAll().forEach(System.out::println);
    }

}


