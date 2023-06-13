package com.example.agri.service;
	import com.example.agri.dto.AdminDTO;
	import com.example.agri.dto.AdminLoginDTO;

	import com.example.agri.response.AdminLoginMessage;


	public interface AdminService {
		String addAdmin(AdminDTO adminDTO);
		AdminLoginMessage loginAdmin(AdminLoginDTO adminloginDTO);

	}


