package com.example.agri.model;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;


@Entity
public class AgriModel {
	@Id
	private int id;
	private String name;
	private String cost;
	private String manufactured;
	private String expired;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="details")
	public List<Feature>details;
	
	public List<Feature> getDetails() {
		return details;
	}
	public void setDetails(List<Feature> details) {
		this.details = details;
	}
	AgriModel(){}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getManufactured() {
		return manufactured;
	}
	public void setManufactured(String manufactured) {
		this.manufactured = manufactured;
	}
	public String getExpired() {
		return expired;
	}
	public void setExpired(String expired) {
		this.expired = expired;
	}
}
