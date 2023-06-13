package com.example.agri.service.impl;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.agri.model.UserModel;
import com.example.agri.dto.LoginDTO;
import com.example.agri.dto.UserDTO;
import com.example.agri.repository.UserRepository;
import com.example.agri.response.LoginMesage;
import com.example.agri.service.UserService;
@Service
public class UserIMPL implements UserService{
     @Autowired
     UserRepository ur;
    
     @Override
     public String addUser(UserDTO userDTO) {
  
         UserModel user = new UserModel(
  
                 userDTO.getId(),
                 userDTO.getEmail(),
                 userDTO.getPassword(),
                 userDTO.getUsername(),
                 userDTO.getMobilenumber(),
                 userDTO.getUserroll()
  
         );
         ur.save(user);
  
         return user.getUsername();
     }
     @Override
     public LoginMesage  loginUser(LoginDTO loginDTO) {
    	 
         UserModel user1 = ur.findByUsername(loginDTO.getUsername());
         if (user1 != null) {
             String password = loginDTO.getPassword();
     
             if (password.equals(password)) {
                 Optional<UserModel> user = ur.findOneByUsernameAndPassword(loginDTO.getUsername(), password);
                 if (user.isPresent()) {
                     return new LoginMesage("Login Success", true);
                 } else {
                     return new LoginMesage("Login Failed", false);
                 }
             } else {
  
                 return new LoginMesage("password Not Match", false);
             }
         }else {
             return new LoginMesage("Email not exits", false);
         }
  
  
     }
}
