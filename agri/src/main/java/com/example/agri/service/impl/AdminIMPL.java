package com.example.agri.service.impl;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agri.dto.AdminDTO;
import com.example.agri.dto.AdminLoginDTO;
import com.example.agri.model.AdminModel;
import com.example.agri.repository.AdminRepository;
import com.example.agri.response.AdminLoginMessage;
import com.example.agri.service.AdminService;

@Service
public class AdminIMPL implements AdminService {
	@Autowired
	AdminRepository ar;

	@Override
	public String addAdmin(AdminDTO adminDTO) {
		  AdminModel admin = new AdminModel(
				  
	                 adminDTO.getAdminid(),
	                 adminDTO.getAdminname(),
	                 adminDTO.getEmail(),
	                 adminDTO.getMobileno(),
	                 adminDTO.getPassword(),
	                 adminDTO.getMajorstream(),
	               
	                 adminDTO.getExperience()
	                
	  
	         );
	         ar.save(admin);
	  
	         return admin.getAdminname();
	}

	@Override
	public AdminLoginMessage loginAdmin(AdminLoginDTO adminloginDTO) {
		AdminModel user1 = ar.findByAdminname(adminloginDTO.getAdminname());
        if (user1 != null) {
            String password = adminloginDTO.getPassword();
    
            if (password.equals(password)) {
                Optional<AdminModel> user = ar.findOneByAdminnameAndPassword(adminloginDTO.getAdminname(), password);
                if (user.isPresent()) {
                    return new AdminLoginMessage("Login Success", true);
                } else {
                    return new AdminLoginMessage("Login Failed", false);
                }
            } else {
 
                return new AdminLoginMessage("password Not Match", false);
            }
        }else {
            return new AdminLoginMessage("Adminname not exits", false);
        }
		
	}

	

}
