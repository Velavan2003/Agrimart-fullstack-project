package com.example.agri.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.agri.model.AdminModel;

@EnableJpaRepositories
@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Integer> {
	Optional<AdminModel> findOneByAdminnameAndPassword(String adminname,String password);
	AdminModel findByAdminname(String adminname);
       
}

