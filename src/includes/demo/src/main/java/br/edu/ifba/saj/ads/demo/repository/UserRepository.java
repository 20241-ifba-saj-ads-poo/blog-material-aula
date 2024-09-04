package br.edu.ifba.saj.ads.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.ifba.saj.ads.demo.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}