package com.example.agri.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.agri.model.UserModel;
@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer>{
	Optional<UserModel> findOneByUsernameAndPassword(String username,String password);
	UserModel findByUsername(String username);


}