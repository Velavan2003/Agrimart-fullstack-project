package com.example.agri.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.agri.dto.LoginDTO;
import com.example.agri.dto.UserDTO;
import com.example.agri.model.UserModel;
import com.example.agri.repository.UserRepository;
import com.example.agri.response.LoginMesage;
import com.example.agri.service.UserService;
@CrossOrigin("*")
@RestController
public class UserController {
	 @Autowired
	 UserService us;
	 @Autowired
	 UserRepository ur;
	 @GetMapping("/all")
	 public List<UserModel>getAllDetails(){
		 return ur.findAll();
	 }
     @PostMapping("/usersave")
     public String saveUser(@RequestBody UserDTO userDTO)
     {
    	 String id=us.addUser(userDTO);
    	 return id;
     }
     @PostMapping("/newlogin")
     public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
     {
    	 LoginMesage loginMesage=us.loginUser(loginDTO);
    	 return ResponseEntity.ok(loginMesage);
     }
     
	 

}

