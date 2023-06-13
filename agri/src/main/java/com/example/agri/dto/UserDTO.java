package com.example.agri.dto;

import jakarta.persistence.Column;

public class UserDTO {
	private int id;
	private String email;
	private String password;
	private String username;
	private String mobilenumber;
	private String userroll;
	public UserDTO() {}
	public UserDTO(int id, String email, String password, String username, String mobilenumber, String userroll) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobilenumber = mobilenumber;
		this.userroll = userroll;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getUserroll() {
		return userroll;
	}
	public void setUserroll(String userroll) {
		this.userroll = userroll;
	}
	

}
