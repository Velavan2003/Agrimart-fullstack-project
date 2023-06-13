package com.example.agri.dto;

	public class AdminDTO {
		private int adminid;
		private String adminname;
		private String mobileno;
		private String email;
		private String password;
		private String majorstream;

		private String experience;
	
		public AdminDTO(int adminid, String adminname, String mobileno, String email, String password, String majorstream,
				 String experience) {
			this.adminid = adminid;
			this.adminname = adminname;
			this.mobileno = mobileno;
			this.email = email;
			this.password = password;
			this.majorstream = majorstream;
			
			this.experience = experience;
			
		}
		
		public AdminDTO(){}

		public int getAdminid() {
			return adminid;
		}
		public void setAdminid(int adminid) {
			this.adminid = adminid;
		}
		public String getAdminname() {
			return adminname;
		}
		public void setAdminname(String adminname) {
			this.adminname = adminname;
		}
		public String getMobileno() {
			return mobileno;
		}
		public void setMobileno(String mobileno) {
			this.mobileno = mobileno;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMajorstream() {
			return majorstream;
		}
		public void setMajorstream(String majorstream) {
			this.majorstream = majorstream;
		}
		
		public String getExperience() {
			return experience;
		}
		public void setExperience(String experience) {
			this.experience = experience;
		}
		
		
	}

