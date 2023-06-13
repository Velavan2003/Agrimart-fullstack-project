package com.example.agri.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_details")
public class UserModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="email",unique=true,nullable=false)
	private String email;
	@Column(name="password",nullable=false)
	private String password;
	@Column(name="username",nullable=false)
	private String username;
	@Column(name="mobilenumber",unique=true,nullable=false)
	private String mobilenumber;
	@Column(name="userroll",nullable=false)
	private String userroll;
	
	UserModel(){}

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

	public String getMobileNumber() {
		return mobilenumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobilenumber = mobileNumber;
	}

	public String getUserRoll() {
		return userroll;
	}

	public void setUserRoll(String userRoll) {
		this.userroll = userRoll;
	}

	public UserModel(int id, String email, String password, String username, String mobileNumber, String userRoll) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobilenumber = mobileNumber;
		this.userroll = userRoll;
	}

	@Override
	public String toString() {
		return "UserModel [id=" + id + ", email=" + email + ", password=" + password + ", username=" + username
				+ ", mobileNumber=" + mobilenumber + ", userRoll=" + userroll + "]";
	}
	

}
