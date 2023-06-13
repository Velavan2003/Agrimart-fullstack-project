package com.example.agri.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.agri.model.AgriModel;
import com.example.agri.repository.AgriRepository;

@Service
public class AgriService {
	@Autowired
	AgriRepository ar;
	public List<AgriModel>getAllDetails()
	{
		return ar.findAll();
	}
	public AgriModel getDetailsById( int id)
	{
		return ar.findById(id).orElse(null);
	}
	public AgriModel saveDetails(AgriModel a)
	{
		return ar.save(a);
	}
	public AgriModel updateDetails(AgriModel s)
	{
		return ar.save(s);
	}

	public void deleteDetailsById(int id)
	{
		ar.deleteById(id);
		
	}
	public List<AgriModel>sortAgri(String field)
	{
		return ar.findAll(Sort.by(field));
	}
	public List<AgriModel>sortAgriDesc(String field)
	{
		return ar.findAll(Sort.by(Direction.DESC,field));
	}
	public List<AgriModel>sortAgriDesc2(String field1,String field2)
	{
		return ar.findAll(Sort.by(Direction.DESC,field1).and(Sort.by(Direction.DESC,field2)));
	}
	public List<AgriModel>pageAgri(int offset,int pagesize)
	{
		Page<AgriModel> paging=ar.findAll(PageRequest.of(offset, pagesize));
		return paging.getContent();
	}
	public List<AgriModel>pageSort(int offset,int pagesize, String field)
	{
		Page<AgriModel>x=ar.findAll(PageRequest.of(offset, pagesize,Sort.by(field).ascending()));
		return x.getContent();
	}
	public List<AgriModel> fetchNamePrefix(String prefix)
	{
		return ar.findByNameStartingWith(prefix);
	}
	public List<AgriModel> fetchNameSuffix(String suffix)
	{
		return ar.findByNameEndingWith(suffix);
	}
	public List<AgriModel> fetchName(String name)
	{
		return ar.findByName(name);
	}
	


	
}
