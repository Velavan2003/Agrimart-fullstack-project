package com.example.agri.service;
import com.example.agri.dto.LoginDTO;
import com.example.agri.dto.UserDTO;
import com.example.agri.response.LoginMesage;

public interface UserService {
       String addUser(UserDTO userDTO);
       LoginMesage loginUser(LoginDTO loginDTO);
}
