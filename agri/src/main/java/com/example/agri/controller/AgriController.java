package com.example.agri.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.agri.model.AgriModel;
import com.example.agri.repository.AgriRepository;
import com.example.agri.service.AgriService;

import io.swagger.v3.oas.annotations.tags.Tag;
@CrossOrigin("*")
@RestController
public class AgriController {
	@Autowired
	AgriService as;
	@Autowired
	AgriRepository ar;
	@GetMapping("/agri")
	public List<AgriModel>getDetails()
	{
		return as.getAllDetails();
	}
	@GetMapping("/agri/{id}")
	public AgriModel getDetailsById(@PathVariable int id)
	{
		return as.getDetailsById(id);
	}
	//post
	@PostMapping("/save")
	public AgriModel saveDetails(@RequestBody AgriModel a)
	{
		return as.saveDetails(a);
	}
	@PutMapping("/put")
	public AgriModel updateDetails(@RequestBody AgriModel s)
	{
		return as.updateDetails(s);
	}
	@PutMapping("/agri/{id}")
	 public ResponseEntity<AgriModel> updateCar(@PathVariable("id") int id, @RequestBody AgriModel agri){
	   AgriModel b = ar.findById(id).get();
	      if(b.getId()!=0) {
	        b.setId(agri.getId());
	        b.setCost(agri.getCost());
	        b.setName(agri.getName());
	        b.setManufactured(agri.getManufactured());
	        b.setExpired(agri.getExpired());
	       
	      }
	  return new ResponseEntity<AgriModel>(ar.save(b),HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteDetailsById(@PathVariable int id)
	{
		 as.deleteDetailsById(id);
		 return "deleted";
	}
	@GetMapping("/sort/{field}")
	public List<AgriModel>sortAllDetails(@PathVariable String field)
	{
		return as.sortAgri(field);
	}
	@GetMapping("/dsort/{field}")
	public List<AgriModel>sortAllDetailsDesc(@PathVariable String field)
	{
		return as.sortAgriDesc(field);
	}
	@GetMapping("/dsorts/{field1}/{field2}")
	public List<AgriModel>sortAllDetailsDesc(@PathVariable String field1,@PathVariable String field2)
	{
		return as.sortAgriDesc2(field1,field2);
	}
	@GetMapping("page/{offset}/{pagesize}")
	public List<AgriModel> paginationAgri(@PathVariable int offset,@PathVariable int pagesize)
	{
		return as.pageAgri(offset, pagesize);
	}
	@GetMapping("page/{offset}/{pagesize}/{field}")
	public List<AgriModel> paginationAgriSort(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field)
	{
		return as.pageSort(offset, pagesize,field);
	}
	@GetMapping("/fetchNamePrefix")
	public List<AgriModel> fetchNamePrefix(@RequestParam String prefix){
		return as.fetchNamePrefix(prefix);
	}
	@GetMapping("/fetchNameSuffix")
	public List<AgriModel> fetchNameSuffix(@RequestParam String suffix){
		return as.fetchNameSuffix(suffix);
	}
	@GetMapping("/fetchName")
	public List<AgriModel> fetchName(@RequestParam String name){
		return as.fetchName(name);
	}
	@Tag(name="jpqlQuery",description ="Getting")
	@GetMapping("/query")
    public List<AgriModel>fetchqueryStreetCafe(@RequestParam String name,@RequestParam String cost )
    {
    	return ar.querycafe(name,cost);
    }
	@Tag(name="jpqlQuery",description ="Getting")
	@GetMapping("/query2")
    public List<AgriModel>fetchquerycafe(@RequestParam String name)
    {
    	return ar. getcafeByname(name);
    }
	@Tag(name="NativeQuery",description ="Getting")
	@GetMapping("/getall/{id}")
	public List<AgriModel> getData(@PathVariable("id")int id)
	{
		return ar.getDataId(id);
	}
	
	
	

}
