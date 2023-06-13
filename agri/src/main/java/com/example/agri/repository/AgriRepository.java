package com.example.agri.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.agri.model.AgriModel;

public interface AgriRepository extends JpaRepository <AgriModel,Integer> {
	public List<AgriModel> findByNameStartingWith(String prefix);
	public List<AgriModel> findByNameEndingWith(String suffix);
	public List<AgriModel> findByName(String name);
	//position parameter
		@Query("select s from AgriModel s where s.name=?1 and s.cost=?2")
		 public List<AgriModel> querycafe(String name, String cost);
		 //named parameters
		@Query("select s from AgriModel s where s.name=:name")
		 public List<AgriModel> getcafeByname(String name);
		@Query(value="select * from agri_model where id=:id",nativeQuery = true)
		public List<AgriModel> getDataId(@Param("id")int id);
		
		
		

}
